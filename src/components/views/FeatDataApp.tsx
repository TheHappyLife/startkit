"use client";
import { Settings } from "@/SettingApp";
import { useStoreApp1 } from "@/store/storeApp1";
import { useStoreApp2 } from "@/store/storeApp2";
import axios from "axios";
import { useEffect } from "react";


const FeatDataApp = () => {
    const { setData1 } = useStoreApp1();
    const { setData2 } = useStoreApp2();
    useEffect(() => {
        const fetchData = async () => {
            for (const setting of Settings) {
                try {
                    const response = await axios.get(setting.url);
                    const data = response.data;
                    if (setting.key === 'key-app1') {
                        setData1(data);
                    }
                    if (setting.key === 'key-app2') {
                        setData2(data);
                    }
                } catch (error) {
                    console.error(`Error fetching from ${setting.url}:`, error);
                }
            }
        };
        fetchData();
    }, []);

    return null; 
};

export default FeatDataApp;