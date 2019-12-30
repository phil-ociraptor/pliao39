import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Projects = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Projects</h1>
      <p className="description">
      </p>

      <div className="content">
        <ul>
          <li><a href="https://getspacetime.app" target="_blank"> SpaceTime</a></li>
          <li><a href="https://emojicp.com" target="_blank"> Emoji cp</a></li>
          <li><a href="http://9cat.fun/" target="_blank"> 9cat</a></li>
          <li><a href="https://motivationalwd40.com/" target="_blank"> Motivational WD-40</a></li>
        </ul>
      </div>
    </div>

    <style jsx global>{`
      body {
        font-family: 'Open Sans', sans-serif;
      }
      .hero {
        width: 100%;
        color: #333;
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
      .content {
        max-width: 880px;
        margin: 40px auto 40px;
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </div>
)

export default Projects
