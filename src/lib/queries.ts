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

const allBlogPostQueries = gql`
  query AllPostsWithPagination($first: Int, $skip: Int, $orderBy: PostOrderByInput) {
    postsConnection(first: $first, skip: $skip, orderBy: $orderBy) {
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

const latestBlogPostsQuery = gql`
  query LatestPosts {
    posts(orderBy: date_ASC, last: 3) {
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
      tags
      title
    }
  }
`;

const allPostsSlugQuery = gql`
  query AllSlug($first: Int, $skip: Int) {
    posts(first: $first, skip: $skip) {
      slug
    }
  }
`;

const postWithSlugQuery = gql`
  query PostWithSlug($where: PostWhereUniqueInput!) {
    post(where: $where) {
      content {
        markdown
      }
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
      description
      date
      tags
      title
      slug
    }
  }
`;

const relatedPostsQuery = gql`
  query RelatedPosts($where: PostWhereInput) {
    posts(where: $where) {
      relations {
        relatedPosts {
          coverTitle
          coverSubtitle
          description
          date
          tags
          slug
          title
          id
          coverImage {
            width
            alt
            height
            url(
              transformation: {
                image: { resize: { width: 896, height: 499, fit: max } }
                document: { output: { format: webp } }
              }
            )
          }
        }
      }
    }
  }
`;

export {
  allBlogPostQueries,
  allPostsSlugQuery,
  categoryHeroPostsQuery,
  categoryPostsWithPaginationQuery,
  latestBlogPostsQuery,
  postWithSlugQuery,
  relatedPostsQuery,
  searchPostWithTitleQuery,
};
