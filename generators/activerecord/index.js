"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    const { orm, appName } = this.options;

    this.fs.copyTpl(
      this.templatePath(`**/${orm}/**`),
      this.destinationPath(appName),
      { ...this.props, app_name: appName, orm },
      null,
      {
        processDestinationPath: filePath => {
          return filePath.replace(orm, "dbs");
        }
      }
    );
  }
};
