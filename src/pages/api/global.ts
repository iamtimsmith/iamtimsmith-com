import client from "../../../tina/__generated__/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { runMiddleware } from "../../utils/middleware";

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res);

	// Rest of the API logic
	const global = await client.queries.global({
		relativePath: `index.json`,
	});
	if (global) {
		return res.status(200).json(global.data.global);
	}
	return res.status(401);
};
