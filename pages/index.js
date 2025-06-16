import React from "react";
import Head from "../components/head";
import Logo from "../components/logo";
import Datestamp from "../components/datestamp";

const Home = () => (
  <div>
    <Head title={"Phil Liao"} />
    <div className="index-container">
      <div className="hero">
        <Logo size={"medium"} />
        <div className="text-start">
          <p className="description">
            Hey 👋, I'm Phil and I'm currently exploring ideas in crypto. In the past, I worked at 0x where I worked on RFQ, Gasless, Intents, and some Routing.
          </p>
          <p className="description">
            You can find me on <a href="https://x.com/philipliao_">X</a> or <a href="https://www.github.com/phil-ociraptor">GitHub</a>
          </p>

          <h2 className="section-title">Writing</h2>
          <ul className="post-links">
            <li>
              <a href="/stablecoins-go-brrrrr">Algo Stables</a>
              <div className="datestamp-wrap"><Datestamp value="2020-12-19" /></div>
            </li>
            <li>
              <a href="/how-to-type-faster">How to Type 100 WPM</a>
              <div className="datestamp-wrap"><Datestamp value="2020-12-06" /></div>
            </li>
            <li>
              <a href="/how-to-yield-farm">How to Yield Farm</a>
              <div className="datestamp-wrap"><Datestamp value="2020-11-20" /></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, "Open Sans", sans-serif;
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
        margin-bottom: 20px;
      }
      .index-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
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
      .text-start {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .post-links {
        list-style: disc;
        align-self: flex-start;
        text-align: left;
        margin: 0 0 20px 0;
      }
      .post-links li {
        margin-bottom: 10px;
      }
      .datestamp-wrap {
        margin-left: 10px;
        display: inline-block;
      }
      .section-title {
        margin: 32px 0 12px 0;
        font-size: 1.3em;
        font-weight: 600;
        letter-spacing: 0.01em;
        color: #333;
        text-align: left;
        align-self: flex-start;
      }
    `}</style>
  </div>
);

export default Home;
