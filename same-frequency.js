// add whatever parameters you deem necessary
function sameFrequency(number1, number2) {
    let num1 = number1.stringify();
    let num2 = number2.stringify();

    if (num1.length !== num2.length) return false;

    let counter1 = {};
    let counter2 = {};

    for (let number of num1) {
        counter1[number] = (counter1[number] || 0) + 1;
    }
    for (let number of num1) {
        counter2[number] = (counter2[number] || 0) + 1;
    }

    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
}
