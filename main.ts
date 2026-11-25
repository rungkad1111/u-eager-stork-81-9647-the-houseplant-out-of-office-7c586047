import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// v2: the neglect drives the joke — unwatered since March, the plant
// now ignores email back, professionally, and defers to the fern.
const line =
  "Out of office: photosynthesizing. Unwatered since March, I now ignore email professionally. Emergencies: ask the fern.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");
console.log(line);
