"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    const { orm, app_name } = this.options;

    this.fs.copyTpl(
      this.templatePath(`**/${orm}/**`),
      this.destinationPath(app_name),
      { ...this.props, app_name, orm },
      null,
      {
        processDestinationPath: filePath => filePath.replace(orm, "")
      }
    );
  }
};
