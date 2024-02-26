import Generator from "yeoman-generator";

export default class extends Generator {
  writing() {
    this.fs.copyTpl(this.templatePath(`**/*.py`), this.destinationPath());
  }
}
