#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const commander = require("commander");
const inquirer = require("inquirer");
const checkDire = require("./utils/checkDire");
const { exec } = require("child_process");
const { version } = require("../package.json");
const { promptTypeList } = require("./config");

// version 版本号
commander
  .version(version, "-v, --version")
  .command("init <projectName>")
  .alias("i")
  .description("请输入项目名称，初始化项目模板")
  .action(async projectName => {
    await checkDire(path.join(process.cwd(), projectName), projectName); //检测项目文件夹是否存在
    inquirer.prompt(promptTypeList).then(result => {
      const { url, gitName, val } = result.type;
      console.log(`有一些模板可供选择`, val);
      console.log("模板拷贝获取中...");
      if (!url) {
        console.log(
          chalk.red(
            `${val} 该模板不存在，请检查github代码库中是否存在该模板...`
          )
        );
        process.exit(1);
      }
      exec(`git clone ${url}`, function (error, stdout, stderr) {
        if (error !== null) {
          console.log(chalk.red(`clone fail, ${error}`));
          return;
        }
        fs.rename(gitName, projectName, err => {
          if (err) {
            exec(`rm -rf ${gitName}`, function (err, out) {});
            console.log(chalk.red(`《${projectName}》该模板已存在`));
          } else {
            console.log(chalk.green(`《${projectName}》项目模版创建成功`));
          }
        });
      });
    });
  });
console.log(process.argv, "====process.argv");
commander.parse(process.argv);
