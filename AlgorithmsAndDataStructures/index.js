// this is the main
// all of the files run here.

/*
==========
RECURSION
==========
*/
const recursion = require('./Recursion/Recursion');
// list for sum of array
let lst = [2, 4, 6, 8, 10];
console.log(recursion.sumOf(lst));
// count sheep
recursion.countSheep(2);
// testing the power calculator
console.log(recursion.powerCalculator(10, 2));
// reversing a string
console.log(recursion.reverseString('hello'));


/*
========
Arrays
========
*/
function wordCounter(str){
    return str.trim().split(/\s+/).length;
}

function numberOfOccurences(str){
    // split the string into words
    let splitWords = str.trim().split(/[ ,]+/);
    let counts = {};
    let compare = 0;

    for(let i=0; i<splitWords.length; i++){
        // use the word to add to an object
        let word = splitWords[i];
        if(counts[word] === undefined){
            // increase the count if undefined
            counts[word] = 1;
        }else{
            // increase the word each time
            counts[word] = counts[word] + 1;
        }
        // find the most frequent word
        if(counts[word] > compare){
            compare = counts[word];
        }
    }
    
    return counts;
    
    
}

function reverseString(str){
    // store it in a string
    let tmpStr = '';
    let compare = 0;
    let counts = {};
    // reverse the str first
    for(let i= str.length-1; i >= 0; i--){
        tmpStr += str.charAt(i).toLowerCase();
    }
    let tmp = str.trim().split(/[ ,]+/);
    tmpStr = tmpStr.trim().split(/[ ,]+/);
    for(let i=0; i<tmp.length; i++){
        let word = tmp[i];
    }
   
}
reverseString('Dad gave mom a Tesla as a racecarhello I am here');
console.log(numberOfOccurences('hello, hi hello hello this is hello'), 'word occurence');
console.log(wordCounter('Hello I am a person'));

/*
============
Linked Lists
============
*/

/*
==================
Sorting Algorithms
==================
*/
// const sort = require('./Sorting/Sorting');

// let sortData = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
// let largeData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93 ,98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85 ,63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// console.log(sort.mergeSort(sortData), 'merger sort');
// console.log(sort.quickSort(sortData), 'Quick sort');
// console.log(sort.mergeSort(largeData), 'sort large data');
