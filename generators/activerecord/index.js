"use strict";
const Generator = require("yeoman-generator");
const yoHelper = require("@jswork/yeoman-generator-helper");

module.exports = class extends Generator {
  writing() {
    const { orm, app_name } = this.options;

    this.fs.copyTpl(
      this.templatePath("**"),
      this.destinationPath(app_name),
      { ...this.props, app_name, orm, ctx: yoHelper.ctx },
      null,
      {
        processDestinationPath: (filePath) => filePath.replace(orm, ""),
      },
    );
  }
};
