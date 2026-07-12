"use client";
import React from "react";
import Logo from "../../components/logo";
import posts from "../../data/posts";

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

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
              {/* Add new post slugs here to make them appear on the homepage */}
              {Object.keys(posts).filter(post => [
                "soros-on-reflexivity",
                "how-to-type-faster",
                "how-to-yield-farm",
              ].includes(post)).map((post) => (
                <li key={post}>
                  <a href={`/${post}`} className="post-link-row">
                    <span className="post-date">{fmtDate(posts[post].published_at)}</span>
                    <span>{posts[post].title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
