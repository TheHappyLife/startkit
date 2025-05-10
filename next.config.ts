/** @type {import('next').NextConfig} */
module.exports = {
  basePath: `/${process.env.NEXT_NAME_APP_1}`,
  assetPrefix: `/${process.env.NEXT_NAME_APP_1}/`,
  async rewrites() {
    return [
      {
        source: `/${process.env.NEXT_LINK_HOME_APP_1}/:path*`,
        destination: "/:path*",
      },
    ];
  },
};
