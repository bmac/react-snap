#!/usr/bin/env node

const url = require("url");
const { run } = require("./index.js");
const { reactSnap, homepage } = require(`${process.cwd()}/package.json`);

run(Object.assign({
  publicPath: homepage ? url.parse(homepage).pathname : "/",
}, reactSnap));
