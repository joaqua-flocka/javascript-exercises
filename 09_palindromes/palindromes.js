function stripString(string){
    let newString = '';
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        if(string[i] >= 'A' && string[i] <= 'Z' ||
           string[i] >= 'a' && string[i] <= 'z'){
            newString += string[i];
        }
    }
    return newString;
}

const palindromes = function (string) {
    let newString = stripString(string);
    let i = 0;
    let j = 0;
    if(newString.length % 2 == 0){
        i = (newString.length / 2);
        j = i - 1;
    }
    else{
        i = Math.floor((newString.length) / 2) + 1;
        j = i - 2;
    }
    for(; i < newString.length; i++){
        if(newString[i] != newString[j])
            return false;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
