#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
  title: " Hello there ! ",
  titleAlignment: "center",
  borderStyle: "round",
  width: 75,
  padding: 1,
  borderColor: "#A7FF83",
};

const data = {
  intro: chalk
    .hex("#FFFADD")
    .bold("I'm Gokulnath, your friendly neighbourhood developer."),
  roles: chalk.hex("#97FFF4")(
    "FrontEnd Developer | UI/UX Designer | Sophomore BTech IT"
  ),
  twitter:
    chalk.white.bold("https://twitter.com/") + chalk.cyan("gokulnath_2329"),
  github: chalk.white.bold("https://github.com/") + chalk.green("GOKULNATH-RS"),
  linkedin:
    chalk.white.bold("https://linkedin.com/in/") + chalk.blue("gokulnath-rs"),
  Socials: chalk.white.bold("https://shor.by/") + chalk.cyan("gokulnath-rs"),
  Portfolio:
    chalk.white.bold("https://") + chalk.hex("#97FFF4")("gokulnathrs.tech"),
  labelTwitter: chalk.bgHex("#FFF").hex("#00acee").bold("    Twitter"),
  labelGitHub: chalk.bgBlack.white.bold("     GitHub"),
  labelLinkedIn: chalk.bgHex("#0072b1").hex("#fef9f3").bold("   LinkedIn"),
  labelWeb: chalk.bgHex("#FFE7CE").hex("#071A52").bold("    Socials"),
  labelPortfolio: chalk.bgHex("#9400FF").hex("#fef9f3").bold("  Portfolio"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const roles = `${data.roles}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.Socials}`;
const portfolio = `${data.labelPortfolio}  ${data.Portfolio}`;

const output =
  newline +
  newline +
  newline +
  introduction +
  newline +
  roles +
  newline +
  newline +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  portfolio +
  newline +
  newline +
  newline;

console.log(boxen(chalk.white(output), options));
