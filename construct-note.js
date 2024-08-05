// add whatever parameters you deem necessary
function constructNote(message, letters) {
    letterCount = {};

    for (let letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    };

    for (let letter of message) {
        if (!letterCount[letter] || letterCount[char] === 0) {
            return false;
        }
        letterCount[char]--;
    }
    
    return true;
}
