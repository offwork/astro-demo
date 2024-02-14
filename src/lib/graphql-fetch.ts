import type { GraphCategoryHeroPotsDoc, GraphCategoryPotsDoc, GraphSearchDoc } from "../models";
import { GraphQLClient } from "graphql-request";
import {
  categoryPostsWithPaginationQuery,
  searchPostWithTitleQuery,
  categoryHeroPostsQuery,
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