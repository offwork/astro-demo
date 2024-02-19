import { GraphQLClient } from "graphql-request";
import { PER_PAGE_SIZE } from "../constants";
import type {
  GraphCategoryHeroPotsDoc,
  GraphCategoryPotsDoc,
  GraphLatestPostsDoc,
  GraphPostDoc,
  GraphPostsDoc,
  GraphRelatedPostDoc,
  GraphSearchDoc,
  GraphSlugsDoc,
} from "../models";
import {
  allBlogPostQueries,
  allPostsSlugQuery,
  categoryHeroPostsQuery,
  categoryPostsWithPaginationQuery,
  latestBlogPostsQuery,
  postWithSlugQuery,
  relatedPostsQuery,
  searchPostWithTitleQuery,
} from "./queries";

export const hygraph = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clsabfi4n000008ksabjb48fh/master"
);

////////////////////////////////////////////////////////////////////////////
//////////////////////////                        //////////////////////////
//////////////////////          BLOG CONTENT          //////////////////////
//////////////////////////                        //////////////////////////
////////////////////////////////////////////////////////////////////////////
export const getSearchBlogPosts = async () => {
  return Promise.all([
    await hygraph.request<GraphSearchDoc>(searchPostWithTitleQuery, {
      first: 75,
      skip: 0,
    }),
    await hygraph.request<GraphSearchDoc>(searchPostWithTitleQuery, {
      first: 75,
      skip: 75,
    }),
  ]).then(([first, second]) => [...first.posts, ...second.posts]);
};

export const getBlogCategoryPots = async (
  first: number,
  skip: number,
  orderBy: string,
  slug: string
) => {
  return await hygraph
    .request<GraphCategoryPotsDoc>(categoryPostsWithPaginationQuery, {
      first: first,
      skip: skip,
      orderBy: orderBy,
      where: {
        blogCategories_some: {
          slug: slug,
        },
      },
    })
    .then((response) => response);
};

export const getCategoryHeroPots = async (slug: string) => {
  return await hygraph
    .request<GraphCategoryHeroPotsDoc>(categoryHeroPostsQuery, {
      where: { slug: slug },
    })
    .then((response) => response.category.heroPosts);
};

export const getAllBlogPots = async (skip = 0) => {
  return await hygraph
    .request<GraphPostsDoc>(allBlogPostQueries, {
      first: PER_PAGE_SIZE,
      skip: skip,
      orderBy: "date_DESC",
    })
    .then((response) => response);
};

export const getLatestBlogPosts = async () => {
  return await hygraph
    .request<GraphLatestPostsDoc>(latestBlogPostsQuery)
    .then((response) => response.posts);
};

export const getAllSlugs = async () => {
  return Promise.all([
    await hygraph.request<GraphSlugsDoc>(allPostsSlugQuery, {
      first: 75,
      skip: 0,
    }),
    await hygraph.request<GraphSlugsDoc>(allPostsSlugQuery, {
      first: 75,
      skip: 75,
    }),
  ]).then(([first, second]) => [...first.posts, ...second.posts]);
};

export const getPost = async (slug: string) => {
  return await hygraph
    .request<GraphPostDoc>(postWithSlugQuery, {
      where: { slug: slug },
    })
    .then((response) => response.post);
};


export const getRelatedPosts = async (slug: string) => {
  return await hygraph
    .request<GraphRelatedPostDoc>(relatedPostsQuery, { where: { slug: slug } })
    .then((response) => response.posts[0].relations[0].relatedPosts);
};
