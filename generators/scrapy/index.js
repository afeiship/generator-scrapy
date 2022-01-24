"use strict";
const Generator = require("yeoman-generator");
const { execSync } = require("child_process");
const shellOpts = { shell: "/bin/bash" };
const TMP = "__tmp__";

module.exports = class extends Generator {
  writing() {
    const appName = this.options.appName;
    execSync(`scrapy startproject ${appName}`, shellOpts);
    execSync(`mv ${appName} ${TMP} && cp -R ${TMP}/* . && rm -rf ${TMP}`);
  }
};
