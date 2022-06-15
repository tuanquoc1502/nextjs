import axios from "axios";

export const getPosts = async (limit) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPostIds = async (limit) => {
  const posts = await getPosts(limit);
  return posts.map((post) => {
    return {
      params: {
        id: `${post.id}`,
      },
    };
  });
  // return posts.map((post) => `/post/${post.id}`);
};

export const getPostbyId = async (id) => {
  try {
    const reponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return reponse.data;
  } catch (err) {
    console.log(err);
  }
};
