// How Many Tabs Do You Have Open? — make.fun entry
// Entry: the number 173 (digits only, no trailing newline).
// Chosen over 47 (too ordinary), 100/200/500 (round guesses, likely fixed
// texts), 42/69/1337 (joke numbers, fail believability) and 9999 (absurd,
// picked to shock): 173 is a specific, odd, three-digit count — far above
// the typical 10-30 tabs, yet entirely believable for a researcher with
// docs, dashboards and repos open, and it reads as a real counted number
// that hints at a life of deep research. Gate: 1-5 chars, digits only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, "173");
// Gate check: "173" is exactly 3 chars, digits only, UTF-8 — valid.
