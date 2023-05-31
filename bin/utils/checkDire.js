// utils/checkDir.js

const fs = require("fs");
const chalk = require("chalk");

module.exports = function (dir, name) {
  let isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(
      chalk.red("\nThe " + name + " project already exists in directory.")
    );
    process.exit(1);
  }
};
