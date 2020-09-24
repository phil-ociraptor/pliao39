import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

import Content from "../../data/books/how-to-take-smart-notes.mdx";

import books from "../../data/books";
import BookHead from "../../components/books/book-head";

const slug = "how-to-take-smart-notes";
const book = books[slug];

const Home = () => (
  <div>
    <BookHead slug={slug} book={book} />
    <Layout>
      <Nav />
      <Content />
    </Layout>

    <style jsx global>{``}</style>
  </div>
);

export default Home;
