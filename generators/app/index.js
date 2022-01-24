"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const globby = require("globby");
const yoHelper = require("@jswork/yeoman-generator-helper");
const execSync = require("child_process").execSync;
const shellOpts = { shell: "/bin/bash" };

require("@afeiship/next-npm-registries");
require("@jswork/next-git-url");
require("@jswork/next-underscored");

const NPM_CHOICES = ["npm", "github", "alo7"].map(item => {
  return { name: item, value: nx.npmRegistries(item) };
});

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the praiseworthy ${chalk.red(
          "generator-scrapy"
        )} generator!`
      )
    );

    const prompts = [
      // {
      //   type: "input",
      //   name: "scope",
      //   message: "Your project_name scope (eg: `@babel`)?",
      //   default: "jswork"
      // },
      // {
      //   type: "list",
      //   name: "registry",
      //   message: "Your registry",
      //   choices: NPM_CHOICES
      // },
      {
        type: "input",
        name: "project_name",
        message: "Your project_name (eg: like this `my-project` )?",
        default: yoHelper.discoverRoot
      },
      {
        type: "input",
        name: "description",
        message: "Your description?"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
      yoHelper.rewriteProps(props, {
        exclude: ["email", "description", "author", "homepage", "registry"]
      });
    });
  }

  writing() {
    const { project_name } = this.props;
    const scrapyDir = nx.underscored(project_name);
    execSync(`scrapy startproject ${scrapyDir}`, shellOpts);
    this.composeWith(require.resolve("../activerecord"));
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(),
      this.props
    );
  }

  install() {}
};
