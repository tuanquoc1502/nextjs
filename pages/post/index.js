import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";

const Post = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.id}--- {post.title}
          <Link href={`/post/${post.id}`}>
            <div className="seeMore">See more</div>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  let posts = await getPosts(10);

  // error api
  if (!posts)
    return {
      notFound: true,
    };

  return {
    props: {
      posts,
    },
  };
};

export default Post;
