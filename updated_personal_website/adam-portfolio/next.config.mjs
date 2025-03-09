/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/gilbertmanor.co.uk' : '',
  assetPrefix: isProd ? '/gilbertmanor.co.uk/' : '',
};

export default nextConfig;
