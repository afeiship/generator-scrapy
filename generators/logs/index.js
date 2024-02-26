import Generator from "yeoman-generator";
import { execSync } from "child_process";

import "@jswork/next-replace-in-file";

export default class extends Generator {
  constructor(args, opts) {
    opts = { ...opts, skipInstall: true };
    super(args, opts);
  }

  writing() {
    const dist = this.destinationPath();
    execSync(`cd ${dist} && mkdir logs && cd logs && touch .gitkeep`);
  }

  updateSettings() {
    const { app_name } = this.options;
    const filename = this.destinationPath(`${app_name}/settings.py`);

    // robots.txt
    nx.replaceInFile(filename, [
      ["ROBOTSTXT_OBEY = True", "ROBOTSTXT_OBEY = False"],
    ]);

    // settings
    this.fs.append(
      filename,
      [
        '\nLOG_LEVEL = "INFO"',
        'LOG_FILE = "./logs/spider.log"',
        'FILES_STORE = "./downloads"',
      ].join("\n"),
    );
  }
}
