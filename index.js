#!/usr/bin/env node

const gradient = require("gradient-string");
const chalk = require("chalk");
const boxen = require("boxen");
//const CFonts = require("cfonts");
const NEWLINE = "\n";
const EMPTYLINE = "";
const LINE = "                               _______________";
/*
CFonts.say("NPX|Card", {
  font: "tiny",
  align: "center",
  color: "cyan",
}); */

const header = {
  title: gradient.cristal(
    " CCC  CCCC  CCCC  CC\nC     C  C  C  C  C  C\nC     CCCC  C C   C  C\n CCC  C  C  C  C  CC"
  ),
};

console.log(
  boxen([`${header.title}`].join(NEWLINE), {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
    float: "center",
  })
);

const data = {
  name: "                                Alyson Martin ",
  handle: "                                   ~ Aly ~",
  email: "aly.martin.97@gmail.com",
  studies: "Industrial Design / Management Design / Web Development",
  npm: chalk.dim("https://www.npmjs.com/~martaly") + " ~ martaly",
  github: chalk.dim("https://github.com/Martaly") + " ~ Martaly",
  linkedin:
    chalk.dim("https://www.linkedin.com/in/alyson-martin-021559153/") +
    " ~ Alyson Martin",
  instagram:
    chalk.dim("https://www.instagram.com/alyson_martin/?hl=fr") +
    " ~ alyson_martin",
  labelEmail: chalk.bold("                       Email | "),
  labelStudies: chalk.bold("      Studies | "),
  labelNpm: chalk.bold("               Npm | "),
  labelGithub: chalk.bold("                Github | "),
  labelLinkedin: chalk.bold("LinkedIn | "),
  labelInstagram: chalk.bold(" Instagram | "),
};

console.log(
  boxen(
    [
      `${data.name}`,
      `${data.handle}`,
      LINE,
      EMPTYLINE,
      `${data.labelEmail} ${data.email}`,
      LINE,
      EMPTYLINE,
      `${data.labelStudies} ${data.studies}`,
      LINE,
      EMPTYLINE,
      `${data.labelNpm} ${data.npm}`,
      `${data.labelGithub} ${data.github}`,
      `${data.labelLinkedin} ${data.linkedin}`,
      `${data.labelInstagram} ${data.instagram}`,
    ].join(NEWLINE),
    {
      padding: 1,
      borderStyle: "round",
      borderColor: "cyan",
      float: "center",
    }
  )
);
