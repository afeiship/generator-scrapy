"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("spm_name", { type: String, required: true });
    this.option("orm", { type: String, required: true });
  }

  writing() {
    const { orm, spm_name } = this.options;
    const opts = { arguments: [spm_name], orm };
    // create model/spider names:
    this.composeWith("@jswork/scrapy:model", opts);
    this.composeWith("@jswork/scrapy:spider", opts);
  }
};
