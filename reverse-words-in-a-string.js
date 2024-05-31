//     is   a cat
// cat a is

var reverseWords = function(s) {
    return s.trim().split(" ").filter((w) => w !== "").reverse().join(" ");
};

let s = "     is   a cat";
console.log(reverseWords(s));