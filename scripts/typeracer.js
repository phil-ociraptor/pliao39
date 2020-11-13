const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const fsPromises = fs.promises;

// What a game looks like
// {
//   wpm: 93.09, // wpm
//   ac: 0.97, // accuracy
//   r: 2, // rank
//   t: 1574055253.687, // timestamp
//   sl: 'L6', // not sure
//   tid: 3621292, // the text ID
//   gn: 3271, // game number
//   np: 5, // number players
//   pts: 57.4 // points
// }

// Loop until we've gotten all the games, must be iterative
const getAllGames = async user => {
  let result = [];
  let slice = await getGames(user);

  while (slice.length === 1000) {
    const sortedSlice = slice.sort((a, b) => a.t - b.t);
    const endDate = sortedSlice[0].t - 0.001;
    result = result.concat(slice);
    slice = await getGames(user, endDate);
  }
  result = result.concat(slice);
  return result.sort((a, b) => a.gn - b.gn);
};

const getGames = async (
  user,
  endDate = new Date().getTime() / 1000,
  startDate = 0
) => {
  return fetch(
    `https://data.typeracer.com/games?playerId=tr:${user}&universe=play&startDate=${startDate}&endDate=${endDate}&n=1000`
  )
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      return [];
    });
};

const me = "pliao39";

const run = async () => {
  console.log("fetching");
  let data = await getAllGames(me);
  let dataFilePath = path.join(__dirname, "..", "data", `typeracer.json`);
  fsPromises.writeFile(dataFilePath, JSON.stringify(data));
};

run();
