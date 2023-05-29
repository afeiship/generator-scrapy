"use strict";
const Generator = require("yeoman-generator");
const { execSync } = require("child_process");

require("@jswork/next-replace-in-file");

module.exports = class extends Generator {
  writing() {
    const dist = this.destinationPath();
    execSync(`cd ${dist} && mkdir logs && cd logs && touch .gitkeep`);
  }

  updateSettings() {
    const { app_name } = this.options;
    const filename = this.destinationPath(`${app_name}/settings.py`);

    // robots.txt
    nx.replaceInFile(filename, [
      ["ROBOTSTXT_OBEY = True", "ROBOTSTXT_OBEY = False"]
    ]);

    // settings
    this.fs.append(
      filename,
      [
        '\nLOG_LEVEL = "INFO"',
        'LOG_FILE = "./logs/spider.log"',
        'FILES_STORE = "./downloads"',
      ].join("\n")
    );
  }
};
