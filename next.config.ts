import { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack(config, options) {
		// Exclude SVGs from default image loader
		const fileLoaderRule = config.module.rules.find(
			(rule: { test: { test: (arg0: string) => any } }) =>
				rule.test?.test?.(".svg"),
		);

		if (fileLoaderRule) {
			fileLoaderRule.exclude = /\.svg$/;
		}

		config.module?.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
