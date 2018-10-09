# Walmart Product Search UI

This project implements a search UI for the [Walmart Product Search API](https://github.com/hendrikbeneke/walmart-product-search)

NOTE: This is NOT an official Walmart product. This is a personal project to play around with ReactJS and show some of it features.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Install packages](#install-packages)
  - [Run server locally](#run-server-locally)
  - [Build production code](#build-production-code)
  

## Prerequisites

At the moment this UI only works with a local version of the [Walmart Product Search API](https://github.com/hendrikbeneke/walmart-product-search). 
Follow the instructions to start a local server that listens to http://localhost:3001.

## Installation

To install simply clone the repo to your local machine. Make sure you have Node.js `>= 6` installed.

### Install packages

Install required packages with `npm`.
```
npm install
```

### Run server locally
To run the server locally in development mode just run
```
npm start
```

### Build production code
To build the app for production a script bundles all required dependencies and compiles the app into the `build` folder. 
Note: This app does not yet support running in production mode.
```
npm run build
```

## License
This project is [licensed as MIT](https://github.com/hendrikbeneke/walmart-product-search-ui/blob/master/LICENSE).
