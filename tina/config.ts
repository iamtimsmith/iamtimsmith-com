import { defineConfig, MediaStore } from "tinacms";
import { GifSchema } from "../src/components/gif";
import { SignupSchema } from "../src/components/signup";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
	token: process.env.TINA_TOKEN || "",
	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		loadCustomStore: async () => {
			const pack = await import("next-tinacms-cloudinary");
			return pack.TinaCloudCloudinaryMediaStore;
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "boolean",
						name: "published",
						label: "Published?",
					},
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "datetime",
						name: "date",
						label: "Date",
					},
					{
						type: "image",
						name: "feauredImage",
						label: "Featured Image",
					},
					{
						type: "string",
						name: "excerpt",
						label: "Excerpt",
					},
					{
						type: "string",
						name: "tags",
						label: "Tags",
						ui: {
							component: "tags",
						},
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
						templates: [GifSchema, SignupSchema],
					},
				],
				ui: {
					router: ({ document }) =>
						`/posts/${document._sys.filename}`,
					filename: {
						slugify: (values) =>
							values?.title?.toLowerCase().replace(/ /g, "-"),
					},
				},
			},
			{
				name: "page",
				label: "Pages",
				path: "content/pages",
				fields: [
					{
						type: "boolean",
						name: "published",
						label: "Published?",
					},
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
						templates: [GifSchema, SignupSchema],
					},
					{
						type: "image",
						name: "feauredImage",
						label: "Featured Image",
					},
					{
						type: "string",
						name: "excerpt",
						label: "Excerpt",
					},
				],
				ui: {
					router: ({ document }) => `/${document._sys.filename}`,
					filename: {
						slugify: (values) =>
							values?.title?.toLowerCase().replace(/ /g, "-"),
					},
				},
			},
			{
				name: "global",
				label: "Global",
				path: "content/global",
				format: "json",
				ui: {
					global: true,
				},
				fields: [
					{
						name: "header",
						label: "Header",
						type: "object",
						fields: [
							{
								name: "siteName",
								label: "Site Name",
								type: "string",
								required: true,
							},
							{
								name: "siteDescription",
								label: "Site Description",
								type: "string",
								required: true,
							},
							{
								name: "favicon",
								label: "Favicon",
								type: "image",
								required: true,
							},
							{
								name: "nav",
								label: "Navigation",
								type: "object",
								list: true,
								required: true,
								fields: [
									{
										name: "title",
										label: "Title",
										type: "string",
										required: true,
									},
									{
										name: "url",
										label: "URL",
										type: "string",
										required: true,
									},
								],
								ui: {
									defaultItem: {
										title: "New Item",
									},
									itemProps: (item) => ({
										label: item.title,
									}),
								},
							},
						],
					},
					{
						name: "site",
						label: "Site",
						type: "object",
						required: true,
						fields: [
							{
								name: "postsPerPage",
								label: "Posts per page",
								type: "number",
								required: true,
							},
						],
					},
					{
						name: "footer",
						label: "Footer",
						type: "object",
						fields: [
							{
								name: "socialNav",
								label: "Social Nav",
								type: "object",
								list: true,
								required: true,
								fields: [
									{
										name: "icon",
										label: "Icon",
										type: "string",
										options: [
											"Dev.to",
											"Github",
											"Linkedin",
											"Twitter",
										],
										required: true,
									},
									{
										name: "title",
										label: "Title",
										type: "string",
										required: true,
									},
									{
										name: "url",
										label: "URL",
										type: "string",
										required: true,
									},
								],
								ui: {
									defaultItem: {
										title: "New Item",
									},
									itemProps: (item) => ({
										label: item.title,
									}),
								},
							},
						],
					},
					{
						name: "author",
						label: "Author",
						type: "object",
						fields: [
							{
								name: "portrait",
								label: "Portrait",
								type: "image",
								required: true,
							},
							{
								name: "bio",
								label: "Bio",
								type: "rich-text",
								required: true,
							},
							{
								name: "twitter",
								label: "Twitter Handle",
								type: "string",
								required: true,
							},
						],
					},
				],
			},
		],
	},
});
