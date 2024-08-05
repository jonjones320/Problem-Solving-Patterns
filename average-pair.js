// add whatever parameters you deem necessary
function averagePair(array, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const avg = (array[left] + array[right]) / 2;

        if (avg === target) {
            return true;
        } else if (avg < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
