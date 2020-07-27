import React from "react";
import Head from "../components/head";
import Logo from "../components/logo";
import PostList from "../components/post-list";
import ProjectList from "../components/project-list";
import posts from "../data/posts";
import notes from "../data/notes";
import projects from "../data/projects";
import NotesList from "../components/notes-list/notes-list";
import Twitter from "../components/social-icons/twitter";

const Home = () => (
  <div>
    <Head title={"@pliao39"} />

    <div className="index-container">
      <div className="hero">
        <Logo size={"medium"} />
        <p className="description">
          Hey there - I'm Phil and you've found my personal site. Below you'll
          find some{" "}
          <a href="#posts">
            <strong>posts</strong>
          </a>{" "}
          (from a time when I was trying to be too perfect on the internet),
          some{" "}
          <a href="#notes">
            <strong>notes</strong>
          </a>{" "}
          (where I stop giving a shit), and a list of
          <a href="#projects">
            <strong> projects</strong>
          </a>{" "}
          (where I don't know what I'm doing)
        </p>

        <div>
          <Twitter />
        </div>

        <div className="list-container" id="posts">
          <PostList posts={posts} />
        </div>
        <div className="list-container" id="notes">
          <NotesList posts={notes} />
        </div>
        <div className="list-container" id="projects">
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
    <style jsx global>{`
      body {
        font-family: "Open Sans", sans-serif;
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
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
