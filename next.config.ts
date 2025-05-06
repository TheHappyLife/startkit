/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `/${process.env.NEXT_NAME_APP_1}/:path*`,
        destination: `${process.env.NEXT_DOMAIN_MODULE_1}/${process.env.NEXT_NAME_APP_1}:path*`,
      },
      //         {
      //   ... ? ... tương tự zone trên
      //          },
      {
        source: "/",
        destination: `${process.env.NEXT_PUBLIC_MAIN}`,
        has: [
          {
            type: "header",
            key: "referer",
            value: `${process.env.NEXT_DOMAIN_MODULE_1}/${process.env.NEXT_NAME_APP_1}`,
          },
        ],
      },
      //     {
      //      ...? ... tương tự zone trên
      //  }
    ];
  },
};

module.exports = nextConfig;
