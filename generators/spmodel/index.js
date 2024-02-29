import Generator from "yeoman-generator";
import { execSync } from "child_process";

const MAIN = "@jswork/scrapy";

export default class extends Generator {
  constructor(args, opts) {
    opts = { ...opts, skipInstall: true };
    super(args, opts);
    this.argument("model_name", { type: String, required: true });
  }


  writing() {
    const { model_name } = this.options;
    this.composeWith(`${MAIN}:model`, { args: [model_name] });
  }
}
