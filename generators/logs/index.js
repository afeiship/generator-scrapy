"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath("logs"),
      this.destinationPath(this.options.appName),
      this.props
    );
  }

  updateSetttings() {
    const { appName } = this.options;
    const filename = this.destinationPath(`${appName}/settings.py`);
    const settings = this.fs.read(filename);
    console.log(settings);
  }
};
