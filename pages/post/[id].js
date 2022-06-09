import React from "react";
import Layout from "../../components/Layout";
import { getPostbyId, getPostIds } from "../../lib/post";

const Ids = ({ post }) => {
  return <Layout>{post.title}</Layout>;
};

export const getStaticPaths = async () => {
  const paths = await getPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostbyId(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Ids;
