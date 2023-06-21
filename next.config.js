module.exports = {
	async rewrites() {
		return [
			{
				source: "/admin",
				destination: "/admin/index.html",
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/**`,
			},
		],
	},
};
