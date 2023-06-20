import client from "../../../../tina/__generated__/client";
import { runMiddleware } from "../../../utils/middleware";

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res);
	const args: any = {};

	if (req.query?.sort) args.sort = req.query.sort;
	if (req.query?.published === "true")
		args.filter = { ...args.filter, published: { eq: true } };
	// Fetch posts
	const page = await client.queries.postConnection(args);
	let posts = page.data?.postConnection?.edges || [];
	// Handle sort order
	if (req.query?.order?.indexOf(/desc/i)) {
		posts.reverse();
	}
	// Handle pagination
	if (req.query?.skip) {
		posts = posts.splice(req.query.skip);
	}
	// Handle limit to return
	if (req.query?.limit) {
		posts = posts.slice(0, parseInt(req.query.limit));
	}

	if (page) {
		return res.status(200).json(posts);
	}
	return res.status(401);
};
