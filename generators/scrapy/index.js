import Generator from "yeoman-generator";
import { execSync } from "child_process";

const shellOpts = { shell: "/bin/bash" };
const TMP = "__tmp__";

export default class extends Generator {
  constructor(args, opts) {
    opts = { ...opts, skipInstall: true };
    super(args, opts);
  }

  writing() {
    const app_name = this.options.app_name;
    execSync(`scrapy startproject ${app_name}`, shellOpts);
    execSync(`mv ${app_name} ${TMP} && cp -R ${TMP}/* . && rm -rf ${TMP}`);
  }
}
