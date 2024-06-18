const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
	/* normal Next.js config options here */
});
