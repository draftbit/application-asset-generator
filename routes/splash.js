const Fs = require("fs");
const Fetch = require("node-fetch");

const { processSplash } = require("../src/imageProcessor");

module.exports = async (request, h) => {
  const { imageUrl, color } = request.query;

  const image = await Fetch(imageUrl).then(res => res.buffer());

  await processSplash(image, color, "./tmp.png");

  return h.file("./tmp.png");
};
