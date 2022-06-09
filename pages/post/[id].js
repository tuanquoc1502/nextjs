import React from "react";
import Layout from "../../components/Layout";

const Ids = () => {
  return <Layout>Ids</Layout>;
};

export const getStaticPaths = async () => {
  return {
    paths: {},
    fallback: false,
  };
};

export default Ids;
