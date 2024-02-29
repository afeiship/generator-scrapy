import Generator from "yeoman-generator";
import yoHelper from "@jswork/yeoman-generator-helper";

export default class extends Generator {
  constructor(args, opts) {
    opts = { ...opts, skipInstall: true };
    super(args, opts);
  }

  get srcFiles() {
    return globby.sync(this.templatePath("**"), { dot: true });
  }

  writing() {
    const { app_name } = this.options;

    this.fs.copyTpl(
      this.srcFiles,
      this.destinationPath(app_name),
      { ...this.props, app_name, ctx: yoHelper.ctx, }
    );
  }
}
