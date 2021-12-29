/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  // basePath: '',
  // If you need to customize the basePath, please don't check the example at https://github.com/ixartz/Next-js-Boilerplate/blob/master/src/layout/Meta.tsx#L27
  reactStrictMode: true,
});
