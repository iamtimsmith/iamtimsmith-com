import { defineConfig, MediaStore } from "tinacms";
import { GifSchema } from '../src/components/gif';
import { SignupSchema } from '../src/components/signup';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: "b059e296-ec59-4b22-838c-e4b77bff495e", // Get this from tina.io
	token: 'ff80b5d4aebc9a3d11c6cd40a5d3006c8f5b85ff', // Get this from tina.io
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
						type: 'boolean',
						name: 'published',
						label: 'Published?',
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
						name: 'seoImage',
						label: 'SEO Image',
					},
					{
						type: 'string',
						name: 'seoDescription',
						label: 'SEO Description',
					}
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/posts/${document._sys.filename}`,
					filename: {
						slugify: values => values?.title?.toLowerCase().replace(/ /g, '-'),
					}
				},
			},
			{
				name: "page",
				label: "Pages",
				path: "content/pages",
				fields: [
					{
						type: 'boolean',
						name: 'published',
						label: 'Published?',
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
						templates: [
							GifSchema,
							SignupSchema
						]
					},
					{
						type: 'image',
						name: 'seoImage',
						label: 'SEO Image',
					},
					{
						type: 'string',
						name: 'seoDescription',
						label: 'SEO Description',
					}
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/${document._sys.filename}`,
					filename: {
						slugify: values => values?.title?.toLowerCase().replace(/ /g, '-'),
					}
				},
			},
			{
				name: 'author',
				label: 'Authors',
				path: 'content/authors',
				fields: [
					{
						name: 'name',
						label: 'Name',
						type: 'string',
						isTitle: true,
						required: true,
					},
					{
						name: 'portrait',
						label: 'Portrait',
						type: 'image',
					},
					{
						name: 'bio',
						label: 'Bio',
						type: 'rich-text',
					}
				],
				ui: {
					filename: {
						slugify: values => values?.name?.toLowerCase().replace(/ /g, '-'),
					}
				},
			}
		],
	},
});
