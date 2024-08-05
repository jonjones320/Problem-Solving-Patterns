// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (arr[left] > 0) {
            left++;
        } else if (arr[right] < 0) {
            right--;
        } else {
            // temp = array[left];
            // array[left] = array[right];
            // array[right] = temp;
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left ++;
            right--;
        }
    }
    return array;
}
