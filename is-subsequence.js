// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 < string2.length) {
        if (string1[pointer1] === string2[pointer2]) {
            pointer1++
        };
        if (string1.length === pointer1) return true;
        
        pointer2++;
    }
    return false;
}
