import React from "react";
import Head from "../components/head";
import Logo from "../components/logo";
import PostList from "../components/post-list";
import ProjectList from "../components/project-list";
import posts from "../data/posts";
import notes from "../data/notes";
import notesMeta from "../data/notes-meta";
import projects from "../data/projects";
import NotesList from "../components/notes-list/notes-list";
import Twitter from "../components/social-icons/twitter";
import books from "../data/books";
import BookList from "../components/books/book-list";
import ButtondownSubscribe from "../components/buttondown-subscribe";

const Home = () => (
  <div>
    <Head title={"@pliao39"} />

    <div className="index-container">
      <div className="hero">
        <Logo size={"medium"} />
        <div className="text-start">
          <p className="description">
            Hey 👋, I'm Phil and you've found my personal site. Below you'll
            find <a href="#posts">posts</a>, <a href="#notes">notes</a>{" "}
            (half-baked, weekly ideas), <a href="#books">book</a> reviews and a
            list of <a href="#projects">projects</a>. This site is a work in
            progress, and expect it to change frequently.
          </p>
          <p className="description">
            To reach out DM me{" "}
            <a href="https://twitter.com/pliao39">on Twitter!</a>
          </p>

          <div>
            <Twitter />
          </div>
        </div>

        <div className="list-container" id="posts">
          <PostList posts={posts} />
        </div>
        <div className="list-container" id="notes">
          <NotesList notes={notes} meta={notesMeta} />
          <ButtondownSubscribe />
        </div>
        <div className="list-container" id="books">
          <BookList books={books} />
        </div>
        <div className="list-container" id="projects">
          <ProjectList projects={projects} />
        </div>
        <div className="end">Thanks for visiting</div>
      </div>
    </div>
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
      .end {
        display: flex;
        justify-content: center;
        align-items: center;
        height 800px;
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
