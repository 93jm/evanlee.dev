import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  //   async rewrites() {
  //     return [
  //       {
  //         source: '/upload/:slug',
  //         destination: 'http://localhost:9090/upload/:slug',
  //       },
  //     ];
  //   },
  reactStrictMode: false,
};

export default withVanillaExtract(nextConfig);
