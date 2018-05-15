"use strict";

const gm = require("gm");
const path = require("path");
const fetch = require("node-fetch");

const argv = require("yargs").argv;
const outputDir = argv.outputDir || __dirname;

const { processIcon, processSplash } = require("./src/imageProcessor");

async function main() {
  if (
    (!argv.imagePath && !argv.imageUrl) ||
    (argv.imagePath && argv.imageUrl)
  ) {
    console.error("Image path or url is required");
    process.exit(1);
  }

  if (!argv.color) {
    console.error("Color is required");
    process.exit(1);
  }

  if (argv.color.length !== 3 && argv.color.length !== 6) {
    console.error("Invalid color format. Color should be in hex code format.");
    process.exit(1);
  }

  let logo;
  if (argv.imageUrl) {
    logo = await fetch(argv.imageUrl).then(res => res.buffer());
  } else {
    logo = argv.imagePath;
  }

  await processIcon({
    logo,
    color: argv.color,
    outputFile: path.join(outputDir, "icon.png")
  });

  await processSplash({
    logo,
    backgroundImage: argv.backgroundImagePath,
    color: argv.color,
    outputFile: path.join(outputDir, "splash.png")
  });
}

main();
