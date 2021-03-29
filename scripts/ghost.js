let GhostContentAPI = require("@tryghost/content-api");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "http://localhost:2368",
  // key: "bff3a3c5f399533e5040aa863b",
  key: "218df7c8e411763194635d8e43",
  version: "v4",
});

async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });
}

// A bit of a hack, but it works
function formatYouTubeVideos(post) {
  const html = post.html.replace(
    /iframe width=\"[0-9]*\" height=\"[0-9]*\"/g,
    'iframe width="600" height="350"'
  );
  return {
    ...post,
    html,
  };
}

async function generatePostsForPost(post) {
  const content = `import React from "react";
import Post from "../components/post";
import posts from "../data/posts";

export default () => <Post post={posts["${post.slug}"]} />;
`;

  let noteOutputDir = path.join(__dirname, "..", "pages", `${post.slug}.js`);
  return fsPromises.writeFile(noteOutputDir, content);
}

async function run() {
  let rawPosts = await getPosts();
  let posts = rawPosts.map(formatYouTubeVideos);
  let postMap = posts.reduce((acc, curr) => {
    if (curr.slug) {
      acc[curr.slug] = curr;
    }
    return acc;
  }, {});

  console.log("Updating post data for:");
  console.log(Object.keys(postMap));

  var outputPath = path.join(__dirname, "..", "data", "posts.js");
  fs.writeFileSync(outputPath, `export default ${JSON.stringify(postMap)}`);

  await Promise.all(posts.map((x) => generatePostsForPost(x)));
}

run();
