const gm = require("gm");

async function processIcon(image, color, outputFile) {
  return new Promise((resolve, reject) => {
    gm(image)
      .resize(750, 750)
      .background(`#${color}`)
      .flatten()
      .gravity("Center")
      .extent(1024, 1024)
      .write(outputFile, function(err) {
        if (err) reject(err);
        resolve();
      });
  });
}

async function processSplash(image, color, outputFile) {
  return new Promise((resolve, reject) => {
    gm(image)
      .resize(350, 350)
      .background(`#${color}`)
      .flatten()
      .gravity("Center")
      .extent(1242, 2436)
      .write(outputFile, function(err) {
        if (err) reject(err);
        resolve();
      });
  });
}

module.exports = { processIcon, processSplash };
