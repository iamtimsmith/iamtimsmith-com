import client from "../../../.tina/__generated__/client"
import { runMiddleware } from "../../utils/middleware";

export default async (req, res) => {
	// Run the middleware
	await runMiddleware(req, res);

	// Rest of the API logic
	const page = await client.queries.postConnection();
	if (page) {
		return res.status(200).json(page.data.postConnection.edges)
	}
	return res.status(401);
}
