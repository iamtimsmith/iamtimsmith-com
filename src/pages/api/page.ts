import client from "../../../.tina/__generated__/client"
import type { NextApiRequest, NextApiResponse } from 'next'
import { runMiddleware } from "../../utils/middleware"

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res)

	// Rest of the API logic
	const page = await client.queries.page({ relativePath: `${req.query.path}.md` });
	if (page) {
		return res.status(200).json(page.data.page)
	}
	return res.status(401);
}
