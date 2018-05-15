# Application Asset Generator

A tool to quickly generate mobile app assets. Supports [just about any format you can think of](http://www.graphicsmagick.org/formats.html).

## Requirements

* GraphicsMagick (`brew install graphicsmagick`, `port install GraphicsMagick`)
* If using Illustrator files (.ai or .eps), ghostscript (`brew install ghostscript`, `port install ghostscript`)

## Getting Started

* Run `yarn` or `npm install`
* `yarn start --imagePath= --color= [--outputDir=]` OR `yarn start --imageUrl= --color= [--outputDir=]`

## Arguments

* **imagePath** The path of the input logo image to be used for asset generation. Either `imagePath` or `imageUrl` is required.
* **imageUrl** The url of the input logo image to be used for asset generation. Either `imagePath` or `imageUrl` is required.
* **color** The color to use as the asset background color.
* (Optional) **outputDir** The directory to output the assets. If not specified, the current directory will be used.
