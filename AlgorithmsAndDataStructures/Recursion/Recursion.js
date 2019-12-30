
// print the sum of an array
const sumOf = function (list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    // we use slice to remove an element each time
    return list[0] + sumOf(list.slice(1));  
}

// test counting of sheep
const countSheep = (num, count) =>{
    // this is so we can leave the count undefined
    if(count === undefined)count = 1;

    // obviously there is no counting 
    // when the number is 0
    if(num === 0){
        return 0;
    }

    // end recursion when the number is hit
    if(num+1 === count){
        console.log('all the sheep jumped over the fence');
        return num;
    }
    console.log(count, ' Sheep jumps over the fence');
    return countSheep(num, count+1);
}


const powerCalculator = (base, exp, count)=>{
    if(count === undefined)count = 1;
    if(exp <= 0){
        console.log('Error exponent need to be greater than 0');
        return 1;
    }

    if(exp+1 === count){
        return base;
    }

    return powerCalculator(base**count, exp, count+1);
}

const reverseString = (str)=>{
    // if(newStr === undefined)newStr = '';
    // if(count === undefined)count = str.length;
    if(str === ""){
        return 0;
    }

    return reverseString(str.substr(1)) + str.charAt(0);
}

module.exports = {
    sumOf,
    countSheep,
    powerCalculator,
    reverseString,
}