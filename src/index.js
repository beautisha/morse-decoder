const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
// 10 - .  11 - - 
function decode(expr) {
    str = '';
    for (let i = 0; i <expr.length; i = i + 10) {
        for (let j = i; j < i+10; j = j+2) {
            if (expr[j] == '*') {
                str = str + ' ';
                break;
            }
            switch (expr[j]+expr[j+1]) {
                case '00': str = str + ''; break;
                case '10': str = str + '.'; break;
                case '11': str = str + '-'; break;
            }
        }
        str = str + '#';
    }
    console.log (str);
    let arr = str.split('#');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            arr1[i-1] = arr1[i-1]+' ';
        } else {
        arr1[i] = MORSE_TABLE[arr[i]]};
    }
    return arr1.toString().replaceAll(',','');
}

module.exports = {
    decode
}