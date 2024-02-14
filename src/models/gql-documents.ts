//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
/////////////////          GRAPHQL DOCUMENTS         /////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * @private
 */
type Count = { count: number };
/**
 * @private
 */
type Edge<T> = {
  node: T;
};
/**
 * @private
 */
type PostsCategory<T> = {
  name: string;
  slug: string;
  heroPosts: Array<T>;
};
/**
 * @private
 */
type PageConnection<T> = {
  aggregate: T;
};
/**
 * @private
 */
type PostsConnection<T> = {
  edges: Array<Edge<T>>;
  aggregate: Count;
  pageInfo: PageInfo;
};
/**
 * @private
 */
type PageInfo = {
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
/**
 * Slug represents the URL path it belongs to.
 */
type Slug = { slug: string };
/**
 * CoverImage is the visual object that appears at the top of the post and in the list view.
 */
type CoverImage = {
  alt: string;
  height?: number;
  url: string;
  width?: number;
};
/**
 * PostCard represents each item in the post list view.
 */
type PostCard = {
  coverImage: CoverImage;
  coverSubtitle: string;
  coverTitle: string;
  date: string;
  description: string;
  id: string;
  slug: string;
  tags: string[];
  title: string;
};
/**
 * Post is the object that represents the post itself.
 */
type Post = {
  content: { markdown: string };
  coverImage: CoverImage;
  date: string;
  description: string;
  id: string;
  slug: string;
  tags: string[];
  title: string;
};
/**
 * Search is an object that lists search results.
 */
type Search = {
  id: string;
  slug: string;
  title: string;
};
/**
 * GraphCategoryPagesDoc lists the results of a particular category.
 */
type GraphCategoryPagesDoc = {
  postsConnection: PageConnection<Count>;
};
/**
 * GraphBlogPagesDoc is the count of all blog pages.
 */
type GraphBlogPagesDoc = {
  postsConnection: PageConnection<Count>;
};
/**
 * GraphSlugsDoc is the url path of each post.
 */
type GraphSlugsDoc = {
  posts: Slug[];
};
/**
 * GraphLatestPostsDoc represents the latest posts.
 */
type GraphLatestPostsDoc = {
  posts: PostCard[];
};
/**
 * GraphPostDoc is the post itself.
 */
type GraphPostDoc = {
  post: Post;
};
/**
 * GraphRelatedPostDoc represents posts related to the displayed article.
 */
type GraphRelatedPostDoc = {
  posts: {
    relations: {
      relatedPosts: PostCard[];
    }[];
  }[];
};
/**
 * GraphSearchDoc lists search results.
 */
type GraphSearchDoc = {
  posts: Search[];
};
/**
 * GraphPotsDoc lists all blog posts.
 */
type GraphPostsDoc = {
  postsConnection: PostsConnection<PostCard>;
};
/**
 * GraphCategoryPotsDoc lists selected category posts.
 */
type GraphCategoryPotsDoc = {
  postsConnection: PostsConnection<PostCard>;
};
/**
 * GraphCategoryHeroPotsDoc lists hero posts in the selected category.
 */
type GraphCategoryHeroPotsDoc = {
  category: PostsCategory<PostCard>;
};

export type {
  GraphCategoryPagesDoc,
  GraphBlogPagesDoc,
  GraphSlugsDoc,
  GraphLatestPostsDoc,
  GraphPostDoc,
  GraphRelatedPostDoc,
  GraphSearchDoc,
  GraphPostsDoc,
  GraphCategoryPotsDoc,
  GraphCategoryHeroPotsDoc,
  CoverImage,
  PostCard,
  Slug,
  Post,
  Search,
};