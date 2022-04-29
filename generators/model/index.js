"use strict";
const Generator = require("yeoman-generator");
const globby = require("globby");
const yoHelper = require("@jswork/yeoman-generator-helper");

module.exports = class extends Generator {
  async prompting() {
    const prompts = [
      {
        type: "input",
        name: "model_name",
        message: "Your model_name?",
        validate: Boolean
      }
    ];

    this.props = await this.prompt(prompts);
    yoHelper.rewriteProps(props, {
      exclude: ["email", "description", "author", "homepage", "registry"]
    });
  }

  writing() {
    const { model_name } = this.props;
    const dirs = globby.sync("**/models", { onlyDirectories: true });
    const target = dirs.find(item => item.endsWith("models"));

    this.fs.copyTpl(
      this.templatePath("model.py"),
      this.destinationPath(`${target}/${model_name}.py`),
      this.props
    );
  }
};
