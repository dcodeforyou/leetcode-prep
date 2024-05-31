let str = "xsdemanbrou";

let li = 0;
let ri = str.length - 1;

let arr = str.split("");

function isVowel(char) {
    if(char == 'a' || char == 'e' || char =='i' || char == 'o' || char == 'u') {
        return true;
    }
    return false;
}

while(li < ri) {
    if(isVowel(arr[li]) && isVowel(arr[ri])) {
        let t = arr[li];
        arr[li] = arr[ri];
        arr[ri] = t;
        li++;
        ri--;
    } else if(isVowel(arr[li])) {
        ri--;
    } else if(isVowel(arr[ri])) {
        li++;
    } else {
        li++;
        ri--;
    }
}

console.log(arr.join(""));