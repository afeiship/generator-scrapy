"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const globby = require("globby");
const _ = require("lodash");
const yoHelper = require("@jswork/yeoman-generator-helper");
const getp = require("@jswork/generator-prompts");
const MAIN = "@jswork/scrapy";
const prompts = getp(["scope", "registry", "project_name", "description"]);

require("@jswork/next-git-url");
require("@jswork/next-random-string");

const OrmPromItems = {
  type: "list",
  name: "orm",
  message: "Your orm type?",
  choices: [
    { name: "Peewee", value: "peewee" },
    { name: "Orator", value: "orator" }
  ]
};

module.exports = class extends Generator {
  get scrapAppName() {
    const appName = nx.get(this.props, "project_name");
    return appName ? _.snakeCase(appName) : "";
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the praiseworthy ${chalk.red(
          "generator-scrapy"
        )} generator!`
      )
    );

    const thePrompts = [OrmPromItems, ...prompts];

    return this.prompt(thePrompts).then(props => {
      this.props = props;
      yoHelper.rewriteProps(props, {
        exclude: ["email", "description", "author", "homepage", "registry"]
      });
    });
  }

  writing() {
    const randomStr = nx.randomString(5);
    const appName = this.scrapAppName;
    const orm = this.props.orm;
    const opts = { appName, orm };

    this.composeWith(`${MAIN}:scrapy`, opts);
    this.composeWith(`${MAIN}:activerecord`, opts);
    setTimeout(() => {
      this.composeWith(`${MAIN}:logs`, opts);
    }, 300);
    this.fs.copyTpl(
      globby.sync(this.templatePath("**"), { dot: true }),
      this.destinationPath(),
      { ...this.props, appName, randomStr }
    );
  }
};
