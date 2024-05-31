let str1 = "ABABAB";
let str2 = "ABAB";

// if str1 and str2 are made up of repeated string
// str1 + str2 === str2 + str1
// ?
// AB AB AB + AB AB
// x
// x  x  x    x  x
// str2 + str1
// x x  x x x


// to get the max length string that can repeatedly make s1 & s2
// we need to get length of that string using gcd of s1.len, s2.len

if(str1 + str2 === str2 + str1) {
    // answer exists
    let a = str1.length;
    let b = str2.length;

    while(b % a != 0) {
        let r = b % a;
        b = a;
        a = r;
    }

    // a will be gcd now
    console.log(str1.substring(0, a));

} else {
    console.log("");
}