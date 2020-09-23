import React from "react";
import Head from "../../components/head";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

import Content from "../../data/books/how-to-take-smart-notes.mdx";

const Home = () => (
  <div>
    <Head title={"How to Take Smart Notes"} />
    <Layout>
      <Nav />
      <Content />
    </Layout>

    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, "Open Sans",
          sans-serif;
        line-height: 24px;
        font-weight: 300;
      }
      a {
        text-decoration: none;
        color: #ea9a00;
      }
      a:hover {
        text-decoration: underline;
        text-decoration-color: #686868;
        text-decoration-thickness: 2px;
      }
      .description {
        max-width: 400px;
      }
      .index-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .list-container {
        margin: 20px 0px;
        width: 100%;
      }
      .hero {
        max-width: 660px;
        width: 100%;
        color: #333;
        margin: 100px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 40px auto 40px;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
      }
      .text-start {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Home;
