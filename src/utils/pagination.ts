import client from "../../tina/__generated__/client";

// Get desired posts per page
export const postsPerPage = 6;

export const getTotalPages = async (
  sort = "date",
  published = true,
  tag?: string
) => {
  const args: any = {};

  if (sort) args.sort = sort;
  if (tag) args.filter = { ...args.filter, tags: { in: tag } };
  if (published === true)
    args.filter = { ...args.filter, published: { eq: true } };

  // Get posts from args
  const posts = await client.queries.postConnection(args);
  // Figure out how many pages there are
  const numPages = Math.ceil(
    posts.data.postConnection.edges.length / postsPerPage
  );
  // TODO: Maybe make this return arrays of posts for each page to simplify frontend logic?
  return { numPages };
};

export const getPaginationPages = async () => {
  const pageCount = (await getTotalPages()).numPages;
  const pages = Array.apply(null, { length: pageCount }).map(
    Number.call,
    Number
  );
  return pages
    .filter((p) => p > 0)
    .map((page) => ({
      params: { number: (page + 1).toString() },
    }));
};

export const getPreviousPost = async (page: number) => {
  const { data } = await client.queries.paginationQuery({
    limit: (page - 1) * postsPerPage,
  });
  const previousPost = data.postConnection.edges.splice(-1);

  return previousPost?.[0]?.cursor;
};

export const getPaginatedPosts = (posts: any, page: number) =>
  posts.slice(postsPerPage * (page - 1));
