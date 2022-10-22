"use strict";
const Generator = require("yeoman-generator");
const { execSync } = require("child_process");
const shellOpts = { shell: "/bin/bash" };
const TMP = "__tmp__";

module.exports = class extends Generator {
  writing() {
    const app_name = this.options.app_name;
    execSync(`scrapy startproject ${app_name}`, shellOpts);
    execSync(`mv ${app_name} ${TMP} && cp -R ${TMP}/* . && rm -rf ${TMP}`);
  }
};
