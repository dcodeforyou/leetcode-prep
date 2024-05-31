let str1 = "abcdefgh";
let str2 = "ijk";

let maxLen = str1.length > str2.length ? str1.length : str2.length;

let res = [];

for(let i = 0; i < maxLen; i++) {
    res.push(str1[i], str2[i]);
}
console.log(res);
console.log(res.join(""));