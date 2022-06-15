import React from "react";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/layout";

const Books = ({ books }) => {
  return (
    <>
      <Layout>
        {books.map((book, index) => (
          <div key={index}>{book.bookContent}</div>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const books = await getBooks();
  return {
    props: {
      books,
    },
  };
};

export default Books;
