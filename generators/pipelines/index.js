"use strict";
const Generator = require("yeoman-generator");
const yoHelper = require("@jswork/yeoman-generator-helper");

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(this.templatePath(`**/*.py`), this.destinationPath());
  }
};
