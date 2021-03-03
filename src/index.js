module.exports = function toReadable(number) {
    let namesNumbers = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['null','null','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    ]
    if (number < 10) return namesNumbers[0][number];
    if (number > 9 && number < 20) return namesNumbers[1][number % 10];
    if (number > 19 && number < 100) {
        let tens = Math.floor(number / 10);
        let reminder = number % 10;
        if (reminder > 0) return `${namesNumbers[2][tens]} ${namesNumbers[0][reminder]}`;
        else return `${namesNumbers[2][tens]}`;
    }
    if (number > 99 && number < 1000) {
        let hundreds = Math.floor(number / 100);
        let tens = Math.floor((number % 100) / 10);
        let reminder = number % 10;
        if (tens === 1) return `${namesNumbers[0][hundreds]} hundred ${namesNumbers[1][reminder]}`;
        if (tens > 0 && tens < 10 && reminder > 0 && reminder < 10) {
            return `${namesNumbers[0][hundreds]} hundred ${namesNumbers[2][tens]} ${namesNumbers[0][reminder]}`;
        }
        if (tens > 0 && tens < 10) return `${namesNumbers[0][hundreds]} hundred ${namesNumbers[2][tens]}`;
        if (reminder > 0 && reminder < 10) return `${namesNumbers[0][hundreds]} hundred ${namesNumbers[0][reminder]}`;
        else return `${namesNumbers[0][hundreds]} hundred`;
    }
};




/* 

let strOneToTen = 'zero one two three four five six seven eight nine ten';
    let strElevenToNineteen = 'null eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen';
    let strTwentyToHundred = 'null null twenty thirty fourty fifty sixty seventy eighty ninety hundred';
    if (number <= 10) return strOneToTen[number];
    if (number > 10 && number < 20) return strElevenToNineteen[number];
    if (number > 19 && number < 100) {
        let tens = number / 10;
        let reminder = number % 10;
        return remainder > 0 ? `${strTwentyToHundred[tens]} ${strOneToTen[reminder]}` : `${strTwentyToHundred[tens]}`;
    }
    if (number >= 100 && number < 1000) {
        let hundreds = number / 100;
        let tens = number / 10;
        let reminder = number % 10;
        if (tens > 0 && tens < 10 && reminder > 0 && reminder < 10) return `${strOneToTen[hundreds]} hundred ${strTwentyToHundred[tens]} ${strOneToTen[reminder]}`;
        if (tens > 0 && tens < 10) return `${strOneToTen[hundreds]} hundred ${strTwentyToHundred[tens]}`;
        if (reminder > 0 && reminder < 10) return `${strOneToTen[hundreds]} hundred ${strOneToTen[reminder]}`;
        return `${strOneToTen[hundreds]} hundred`
    }

*/
