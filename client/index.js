"use strict";

const argv = require("yargs").argv;
const outputDir = argv.outputDir || __dirname;

const generateAssets = require("../lib");

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

  if (
    argv.color.toString().length !== 3 &&
    argv.color.toString().length !== 6
  ) {
    console.error("Invalid color format. Color should be in hex code format.");
    process.exit(1);
  }

  await generateAssets({
    logoImagePath: argv.imagePath,
    logoImageUrl: argv.imageUrl,
    backgroundImagePath: argv.backgroundImagePath,
    backgroundImageUrl: argv.backgroundImageUrl,
    color: argv.color,
    outputDir
  });
}

main();
