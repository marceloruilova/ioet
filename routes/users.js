var express = require("express");
var router = express.Router();
const fs = require("fs");
const readline = require("readline");
var compare = require("../logic/array_comparation.js");

/* GET listing. */
router.get("/", async function (req, res, next) {
  //create persons in json format with txt data
  const fileStream = fs.createReadStream("data.txt");
  let data = [];
  let persons = [];
  let result = [];
  let person = { name: "", workdays: [] };
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  //read line by line
  for await (const line of rl) {
    if (line.includes("INPUT")) {
      if (persons.length !== 0) {
        personsaux = [...persons];
        data = [...data, personsaux];
        persons.splice(0, persons.length);
      }
    } else if (line === "FINISH") {
      personsaux = [...persons];
      data = [...data, personsaux];
      persons.splice(0, persons.length);
    } else {
      const index = line.indexOf("=");
      const work_days = line.substring(index + 1, index.length).split(",");
      person = {
        name: line.substring(0, index),
        work_days: work_days,
      };
      persons = [...persons, person];
    }
  }
  //comparation to get common days
  result = compare.arrayComparation(data);
  res.send(result);
});

module.exports = router;
