/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

