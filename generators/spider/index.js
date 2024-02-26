"use strict";
const Generator = require("yeoman-generator");
const globby = require("globby");
const yoHelper = require("@jswork/yeoman-generator-helper");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("model_name", { type: String, required: true });
  }

  writing() {
    const { model_name } = this.options;
    const dirs = globby.sync("**/spiders", { onlyDirectories: true });
    const target = dirs.find((item) => item.endsWith("spiders"));

    this.fs.copyTpl(
      this.templatePath(`spider.py`),
      this.destinationPath(`${target}/${model_name}.py`),
      { model_name, ctx: yoHelper.ctx },
    );
  }
};
