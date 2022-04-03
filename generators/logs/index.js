"use strict";
const Generator = require("yeoman-generator");
const { execSync } = require("child_process");

require("@jswork/next-replace-in-file");

module.exports = class extends Generator {
  writing() {
    const dist = this.destinationPath();
    execSync(`cd ${dist} && mkdir logs && cd logs && touch .gitkeep`);
  }

  updateSetttings() {
    const { appName } = this.options;
    const filename = this.destinationPath(`${appName}/settings.py`);

    // robots.txt
    nx.replaceInFile(filename, [
      ["ROBOTSTXT_OBEY = True", "ROBOTSTXT_OBEY = False"]
    ]);

    this.fs.append(
      filename,
      ['\nLOG_LEVEL = "WARNING"', 'LOG_FILE = "./logs/spider.log"'].join("\n")
    );
  }
};
