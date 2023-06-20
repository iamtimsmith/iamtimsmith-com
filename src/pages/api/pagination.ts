import client from "../../../tina/__generated__/client";
import { runMiddleware } from "../../utils/middleware";

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res);
	const args: any = {};

	if (req.query?.sort) args.sort = req.query.sort;
	if (req.query?.published === "true")
		args.filter = { ...args.filter, published: { eq: true } };

	// Get posts from args
	const post = await client.queries.postConnection(args);
	// Get desired posts per page
	const postsPerPage = parseInt(req.query?.perPage) || 10;
	// Figure out how many pages there are
	const numPages = Math.ceil(
		post.data.postConnection.edges.length / postsPerPage
	);
	// TODO: Maybe make this return arrays of posts for each page to simplify frontend logic?
	return res.status(200).json({ numPages });
};
