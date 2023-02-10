const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_URI: process.env.CONTENTFUL_URI,
  },
};

module.exports = nextConfig;
