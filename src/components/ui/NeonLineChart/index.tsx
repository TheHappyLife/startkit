import React, { memo, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import clsx from "clsx";
import formatDate from "@/utils/formatDate";
import { GeneralProps } from "@/types/ui";

export interface NeonLineChartPropsTypes extends GeneralProps {
  categories?: string[];
  series?: Array<{ name: string; data: any[] }>;
}

function NeonLineChart({ series, categories, className }: NeonLineChartPropsTypes) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "transparent",
      height: `${180}px`,
      animation: true,
    },
    colors: ["#60D591"],
    series: [
      {
        type: "line",
        name: "",
        data: series?.[0]?.data ?? [],
        lineWidth: 2, // Line width
        shadow: {
          color: "#60D591", // Neon red glow
          offsetX: 0,
          offsetY: 0,
          opacity: 1,
          width: 15, // Glow width
        },
      },
    ],
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    yAxis: {
      visible: false,
    },
    xAxis: {
      visible: false,
      categories: categories,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#00000055",
      style: {
        color: "#fff",
      },
      padding: 6,
      formatter: function (): string | null {
        try {
          if ((this as any)?.y === "") {
            return null;
          }

          return `<div>
                   <div style="font-size: 0.8em; ">${formatDate((this as any)?.x)}</div> <br/>
                   <div style="font-weight: 600; color: #60D591; font-size: 1.1em;">${+(
                     (this as any)?.y ?? 0
                   )}</div>
                   </div>`;
        } catch (err) {
          console.error("🚀 ~ NeonLineChart ~ err:", err);

          return null;
        }
      },
    },
  };

  return (
    <div className={clsx(className)}>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  );
}

export default memo(NeonLineChart);
