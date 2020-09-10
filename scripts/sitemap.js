const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { runInContext } = require("vm");

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const genSitemap = async links => {
  const stream = new SitemapStream({ hostname: "https://pliao39.com" });
  return streamToPromise(Readable.from(links).pipe(stream)).then(data =>
    data.toString()
  );
};

const createAndSaveSitemap = async () => {
  // Get a list of all the files
  const allPages = getAllFiles("./pages")
    .map(f => f.split("pages")[1])
    .map(f => f.split(".")[0])
    .filter(f => f !== "index.js");

  // Map them into a form that the sitemap module understands
  // See docs: https://www.npmjs.com/package/sitemap
  const links = allPages.map(f => {
    return {
      url: f
    };
  });
  const xml = await genSitemap(links);
  let sitemapFilePath = path.join(__dirname, "..", "public", "sitemap.xml");
  fsPromises.writeFile(sitemapFilePath, xml);
};

createAndSaveSitemap();
