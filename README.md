# Application Asset Generator

## Requirements

* imagemagick (`brew install imagemagick`)
* graphicsmagick (`brew install graphicsmagick`)

## Getting Started

* Run `yarn` or `npm install`
* `yarn start --imagePath= --color= [--outputDir=]` OR `yarn start --imageUrl= --color= [--outputDir=]`

## Arguments

* **imagePath** The path of the input logo image to be used for asset generation. Either `imagePath` or `imageUrl` is required.
* **imageUrl** The url of the input logo image to be used for asset generation. Either `imagePath` or `imageUrl` is required.
* **color** The color to use as the asset background color.
* (Optional) **outputDir** The directory to output the assets. If not specified, the current directory will be used.
