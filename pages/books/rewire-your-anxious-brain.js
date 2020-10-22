import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

import Content from "../../data/books/rewire-your-anxious-brain.mdx";

import books from "../../data/books";
import BookHead from "../../components/books/book-head";

const slug = "rewire-your-anxious-brain";
const book = books[slug];

export default () => (
  <div>
    <BookHead slug={slug} book={book} />
    <Layout>
      <Nav />
      <Content />
    </Layout>

    <style jsx global>{``}</style>
  </div>
);
