import * as fs from "fs";
import * as path from "path";
import { reversed, countCharacters, repeatString } from "./stringUtils";

const sentence = "Learning Node.js is important because it allows building scalable and fast applications.";

const reversedSentence = reversed(sentence);
const charCount = countCharacters(sentence);

console.log(reversedSentence); // Output: "tnatropmi si sj.edoN "
console.log(charCount); // Output: 18
console.log(repeatString("Important!", 3)); // Output: "Important!Important!Important!"


const filePath = path.join(__dirname, "reversed.txt");

fs.writeFileSync(filePath, reversedSentence, "utf-8");

console.log("Reversed sentence saved to:", filePath);