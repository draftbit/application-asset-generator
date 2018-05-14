"use strict";

const gm = require("gm");
const path = require("path");

const argv = require("yargs").argv;

function main() {
  if (!argv.imagePath) {
    console.error("Image path is required");
    process.exit(1);
  }

  if (!argv.color) {
    console.error("Color is required");
    process.exit(1);
  }

  if (argv.color.length !== 7 || argv.color[0] !== "#") {
    console.error(
      "Invalid color format. Color should be in hex code format with leading '#'."
    );
    process.exit(1);
  }

  const outputDir = argv.outputDir || __dirname;

  gm(argv.imagePath)
    .resize(750, 750)
    .background(argv.color)
    .flatten()
    .gravity("Center")
    .extent(1024, 1024)
    .write(path.join(outputDir, "icon.png"), function(err) {
      if (err) console.error(err);
    });

  gm(argv.imagePath)
    .resize(350, 350)
    .background(argv.color)
    .flatten()
    .gravity("Center")
    .extent(1242, 2436)
    .write(path.join(outputDir, "splash.png"), function(err) {
      if (err) console.error(err);
    });
}

main();
