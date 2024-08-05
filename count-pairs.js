// add whatever parameters you deem necessary
function countPairs(array, target) {
    array.sort((a,b) => a -b);
    let left = 0;
    let right = array.length - 1;
    let count = 0;

    while (left < right) {
        sum = array[left] + array[right];
        if (sum < target) {
            left ++;
        } else if (sum > target) {
            right--;
        } else {
            count++;
            left++;
            right--;
        }
    }
    return count;
}
