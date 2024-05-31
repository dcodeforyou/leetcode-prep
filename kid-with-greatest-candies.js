var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map((count) => count + extraCandies >= max);
};

let candies = [2,3,5,1,3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));