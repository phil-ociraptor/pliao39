import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Phil from '../components/phil'
import posts from '../data/posts'
import projects from '../data/projects'
import PostList from '../components/post-list'
import ProjectList from '../components/project-list'
import Logo from '../components/logo'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
    </Head>

    <div className="index-container">
      <div className="hero">
        <Logo size={'medium'}/>
        <p className="description">
          Hey there - I'm Phil and you've found my personal site.
        </p>

        <div className="list-container">
          <PostList posts={posts}/>
        </div>
        <div className="list-container">
          <ProjectList projects={projects}/>
        </div>
      </div>
    </div>
    <style jsx global>{`
      body {
        font-family: 'Open Sans', sans-serif;
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
        max-width: 600px
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
)

export default Home
