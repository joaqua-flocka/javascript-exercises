const findTheOldest = function(array) {
    let oldest = 0;
    let person = null;
    for(item of array){
        let age = 'yearOfDeath' in item ? item.yearOfDeath - item.yearOfBirth : 
                  (new Date()).getFullYear() - item.yearOfBirth;
        if(age > oldest){
            person = item;
            oldest = age;
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
