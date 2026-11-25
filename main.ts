import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// v1: a plain houseplant out-of-office line.
const line =
  "Out of office: I am photosynthesizing and will reply when watered. For emergencies, please talk to the fern.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");
console.log(line);
