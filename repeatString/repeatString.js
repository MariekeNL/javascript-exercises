function repeatString(string,amount) {
    if (amount>=0) {
        let newString ='';
        for(let i = 0; i < amount; i++) {
            newString = newString + string; 
        }
        return newString
    } else {
        return 'ERROR'
    }
}

module.exports = repeatString