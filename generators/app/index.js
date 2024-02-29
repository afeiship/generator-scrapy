import Generator from "yeoman-generator";
import globby from "globby";
import chalk from "chalk";
import yosay from "yosay";
import _ from "lodash";
import yoHelper from "@jswork/yeoman-generator-helper";
import getp from "@jswork/generator-prompts";

const MAIN = "@jswork/scrapy";
const prompts = getp(["scope", "registry", "project_name", "description"]);

import "@jswork/next-git-url";
import "@jswork/next-random-string";
import '@jswork/next-sleep';

export default class extends Generator {
  constructor(args, opts) {
    opts = { ...opts, skipInstall: true };
    super(args, opts);
  }

  get scrapAppName() {
    const appName = nx.get(this.props, "project_name");
    return appName ? _.snakeCase(appName) : "";
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the praiseworthy ${chalk.red(
          "generator-scrapy",
        )} generator!`,
      ),
    );

    this.props = await this.prompt(prompts);
  }

  writing() {
    const randomStr = nx.randomString(5);
    const app_name = this.scrapAppName;
    const opts = { app_name };

    this.composeWith(`${MAIN}:scrapy`, opts);
    this.composeWith(`${MAIN}:activerecord`, opts);

    setTimeout(() => {
      this.composeWith(`${MAIN}:logs`, opts);
    }, 300);

    this.fs.copyTpl(
      globby.sync(this.templatePath("**"), { dot: true }),
      this.destinationPath(),
      { ...this.props, app_name, randomStr, ctx: yoHelper.ctx },
    );
  }
}
