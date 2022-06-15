import React from "react";
import Layout from "../../components/Layout";
import { getPostbyId, getPostIds } from "../../lib/post";
import { useRouter } from "next/router";

const Ids = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      </Layout>
    );
  }

  return <Layout>{post.title}</Layout>;
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostbyId(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default Ids;
