let flowerbed = [0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0];

console.log(canPlaceFlowers(flowerbed, 7));

function canPlaceFlowers(flowerbed, n) {
    let fi = -1; // as if all are 0 we can check
    let li = -1;

    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] == 1) {
            if(fi == -1) {
                fi = li = i;
            } else {
                li = i;
            }
        }
    }

    // if all are zeros
    if(fi == -1) {
        return n <= Math.floor((flowerbed.length + 1) / 2);
    }

    let max = 0;
    // left
    max = Math.floor(fi / 2);
    // right
    max += Math.floor((flowerbed.length - li - 1) / 2);

    // middle
    let count = 0;
    for(let i = fi + 1; i <= li; i++) {
        if(flowerbed[i] == 0) {
            count++;
        } else {
            max += Math.floor((count - 1) / 2);
            count = 0;
        }
    }

    // max += (count - 1) / 2;
    return n <= max;
}