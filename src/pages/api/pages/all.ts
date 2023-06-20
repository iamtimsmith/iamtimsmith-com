import client from "../../../tina/__generated__/client";
import { runMiddleware } from "../../utils/middleware";

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res);
	const args: any = {};

	if (req.query?.sort) args.sort = req.query.sort;
	if (req.query?.first) args.first = parseInt(req.query.first);
	if (req.query?.last) args.last = parseInt(req.query.last);
	if (req.query?.published === "true")
		args.filter = { ...args.filter, published: { eq: true } };

	// Rest of the API logic
	const page = await client.queries.pageConnection(args);
	if (page) {
		return res.status(200).json(page.data.pageConnection.edges);
	}
	return res.status(401);
};
