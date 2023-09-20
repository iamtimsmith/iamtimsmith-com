import client from "../../tina/__generated__/client";

export const getAllTags = async () => {
  // Get all posts
  const postsListData = await client.queries.postConnection({
    filter:
      process.env.NODE_ENV === "production"
        ? { published: { eq: true } }
        : undefined,
  });
  const postsList = postsListData?.data?.postConnection?.edges || [];
  // Get tags from all posts
  let tags = [];
  postsList.forEach(({ node }) => {
    if (node.tags) tags = [...tags, ...node.tags];
  });

  // Create set to eliminate non-unique tags
  return [...new Set(tags)].sort();
};
