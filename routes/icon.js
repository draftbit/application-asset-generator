const Fetch = require("node-fetch");

const { processIcon } = require("../src/imageProcessor");

module.exports = async (request, h) => {
  const { logoUrl, color } = request.query;

  const logo = await Fetch(logoUrl).then(res => res.buffer());

  try {
    await processIcon({ logo, color, outputFile: "./tmp.png" });
  } catch (err) {
    console.error(err);
  }

  return h.file("./tmp.png");
};
