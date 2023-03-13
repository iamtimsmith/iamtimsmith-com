import { defineConfig } from "tinacms";
import { GifSchema } from '../src/components/gif';
import { SignupSchema } from '../src/components/signup';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: "y", // Get this from tina.io
	token: null, // Get this from tina.io
	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
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
						type: "string",
						name: 'tags',
						label: 'Tags',
						ui: {
							component: 'tags'
						}
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
						templates: [
							GifSchema,
							SignupSchema
						]
					},
					{
						type: 'image',
						name: 'SeoImage',
						label: 'SEO Image',
					},
					{
						type: 'string',
						name: 'SeoDescription',
						label: 'SEO Description',
					}
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/posts/${document._sys.filename}`,
				},
			},
		],
	},
});
