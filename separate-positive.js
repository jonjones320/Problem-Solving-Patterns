// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] > 0) {
            left++;
        } else if (array[right] < 0) {
            right--;
        } else {
            // temp = array[left];
            // array[left] = array[right];
            // array[right] = temp;
            [array[left], array[right]] = [array[right], array[left]];
            left ++;
            right--;
        }
    }
    return array;
}
