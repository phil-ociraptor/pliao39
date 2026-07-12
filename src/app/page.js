"use client";
import React from "react";
import Logo from "../../components/logo";
import Datestamp from "../../components/datestamp";
import posts from "../../data/posts";

export default function Home() {
  return (
    <div>
      <div className="index-container">
        <div className="hero">
          <Logo size={"medium"} />
          <div className="text-start">
            <p className="description">
              Hey 👋, I'm Phil and I work at 0x. There I focus on Matcha and Matcha Meta. Previously, RFQ, Intents, Bridging and DEX aggregation
            </p>
            <p className="description">
              You can find me on <a href="https://x.com/philipliao_">X</a> or <a href="https://www.github.com/phil-ociraptor">GitHub</a>
            </p>

            <h2 className="section-title">Notes</h2>
            <ul className="post-links">
              {Object.keys(posts).map((post) => (
                <li key={post}>
                  <a href={`/${post}`}>{posts[post].title}</a>
                  <div className="datestamp-wrap"><Datestamp value={posts[post].updated_at} /></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 