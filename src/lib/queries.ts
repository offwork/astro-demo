import { gql } from "graphql-request";

const searchPostWithTitleQuery = gql`
  query SearchAllPosts($first: Int, $skip: Int) {
    posts(first: $first, skip: $skip) {
      id
      title
      slug
    }
  }
`;

const categoryPostsWithPaginationQuery = gql`
  query CategoryPostsWithPagination(
    $first: Int
    $skip: Int
    $orderBy: PostOrderByInput
    $where: PostWhereInput
  ) {
    postsConnection(
      first: $first
      skip: $skip
      orderBy: $orderBy
      where: $where
    ) {
      aggregate {
        count
      }
      pageInfo {
        pageSize
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          coverImage {
            alt
            height
            url(
              transformation: {
                image: { resize: { width: 896, height: 499, fit: max } }
                document: { output: { format: webp } }
              }
            )
            width
          }
          coverSubtitle
          coverTitle
          date
          description
          id
          slug
          title
          tags
        }
      }
    }
  }
`;

const categoryHeroPostsQuery = gql`
  query CategoryHeroPostsWithTag($where: CategoryWhereUniqueInput!) {
    category(where: $where) {
      name
      slug
      heroPosts {
        coverImage {
          alt
          height
          url(
            transformation: {
              image: { resize: { width: 896, height: 499, fit: max } }
              document: { output: { format: webp } }
            }
          )
          width
        }
        coverSubtitle
        coverTitle
        date
        description
        id
        slug
        title
        tags
      }
    }
  }
`;

export {
  categoryHeroPostsQuery,
  categoryPostsWithPaginationQuery,
  searchPostWithTitleQuery,
};
