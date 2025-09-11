import {readFile} from "node:fs/promises"
import path from "node:path";

async function reading() {

    const file = await readFile ("README.md", "utf8");
    console.log("Reading file", file)
    
}

reading();

const carpeta = "/Users/ivana/docs";

console.log(path.join(carpeta));  // "/users/ivana/docs/apuntes.txt"
console.log(path.basename(carpeta));       // "docs"