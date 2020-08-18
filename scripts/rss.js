const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

const RSS = require("rss");
import notesMeta from "../data/notes-meta";
import posts from "../data/posts";

/* lets create an rss feed */
let feed = new RSS({
  title: "@pliao39",
  description: "Phil's home on the internet",
  feed_url: "https://pliao39.com/rss.xml",
  site_url: "https://pliao39.com",
  image_url: "https://pliao39.com/phil.jpg",
  ttl: "60"
});

/* loop over data and add to feed */
Object.keys(notesMeta).forEach(title => {
  const meta = notesMeta[title];
  feed.item({
    title,
    url: `https://pliao39.com/weekly_notes/${title}`,
    author: "Phil Liao",
    date: title,
    description: `This week's topics: ${meta.sections.join(", ")}`
  });
});

Object.keys(posts).forEach(title => {
  const post = posts[title];
  feed.item({
    title,
    description: post.custom_excerpt || post.excerpt,
    url: `https://pliao39.com/${post.slug}`,
    author: "Phil Liao",
    date: post.published_at
  });
});

// cache the xml to send to clients
let xml = feed.xml();

let rssFilePath = path.join(__dirname, "..", "public", "rss.xml");
fsPromises.writeFile(rssFilePath, xml);
