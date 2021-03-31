function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0,indexClosingBracketFound);
                }
                else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}

// console.log(findFirstStringInBracket('(DIENUL HAQ), (FITRI)'))

function findFist (str){
    if(str.length <=0){
        return ''
    }

    return str.split('(').slice(1).join('').split(')')[0]
}

console.log(findFist('((((((DIENUL HAQ)), (FITRI)'))
console.log(findFist(''))