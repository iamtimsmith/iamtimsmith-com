import client from "../../../.tina/__generated__/client"
import type { NextApiRequest, NextApiResponse } from 'next'
import { runMiddleware } from "../../utils/middleware"

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res)

	// Rest of the API logic
	const author = await client.queries.author({ relativePath: `${req.query.path}.md` });
	if (author) {
		return res.status(200).json(author.data.author)
	}
	return res.status(401);
}
