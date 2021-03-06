/* eslint-disable no-console */
const loadyaml = require("./scripts/builder/loadyaml")

const mylist = loadyaml("./data/instances.yml")

const duplicated = mylist.filter((e, i, arr) => arr.findIndex(x => x.url === e.url) !== i)
  .map(e => e.url)
if (duplicated.length > 0) console.log(`Duplicated:\n  ${duplicated.join(",\n  ")}\n`)
else console.log("Duplicated:\n  There is no duplicated instance!\n")
