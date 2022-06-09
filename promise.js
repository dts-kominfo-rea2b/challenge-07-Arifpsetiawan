const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaction) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const theaterAll = [...theaterIXX, ...theaterVGC];

  const filteredReaction = theaterAll.filter(
    (item) => item.hasil === reaction
  ).length;

  return filteredReaction;
};

module.exports = {
  promiseOutput,
};
