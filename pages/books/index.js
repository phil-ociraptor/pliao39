import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

import books from "../../data/books";
import Head from "../../components/head";
import BookList from "../../components/books/book-list";

const Home = () => (
  <div>
    <Head title={"Books - Reviews and Takeaways"} />
    <Layout>
      <Nav />
      <BookList books={books} />
    </Layout>

    <style jsx global>{``}</style>
  </div>
);

export default Home;
