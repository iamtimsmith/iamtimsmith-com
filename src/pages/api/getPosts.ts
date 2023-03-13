import client from "../../../.tina/__generated__/client"

export default async (req, res) => {
    const page = await client.queries.postConnection();
    console.log(page);
    return res.status(200).json({test: 'Working', page})

}
  