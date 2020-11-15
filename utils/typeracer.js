const fetch = require("node-fetch");

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
    const endDate = sortedSlice[0].t - 0.001; // exlude
    result = result.concat(slice);
    slice = await getGames(user, 0, endDate);
  }
  result = result.concat(slice);
  return result.sort((a, b) => a.gn - b.gn);
};

const getAllGamesSince = async (user, start) => {
  let result = [];
  let now = new Date().getTime() / 1000;
  let startDate = start + 0.01; //exclude the start

  if (startDate > now) {
    console.log("looking for games in the future");
    return [];
  }

  let slice = await getGames(user, startDate, now);

  while (slice.length === 1000) {
    const sortedSlice = slice.sort((a, b) => a.t - b.t);
    const endDate = sortedSlice[0].t - 0.001;
    result = result.concat(slice);
    slice = await getGames(user, startDate, endDate);
  }
  result = result.concat(slice);
  return result.sort((a, b) => a.gn - b.gn);
};

const getGames = async (
  user,
  startDate = 0,
  endDate = new Date().getTime() / 1000
) => {
  return fetch(
    `https://data.typeracer.com/games?playerId=tr:${user}&universe=play&startDate=${startDate}&endDate=${endDate}&n=1000`
  )
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      // Typeracer API returns a 404 if there is nothing found
      return [];
    });
};

const retry = async (callback, numRetries) => {
  if (numRetries === 0) {
    throw {
      message: "Max retries attempted"
    };
  }
  try {
    return callback();
  } catch (e) {
    if (numRetries > 0) {
      return retry(callback, numRetries - 1);
    } else {
      throw e;
    }
  }
  return;
};

module.exports = {
  getAllGames,
  getAllGamesSince
};
