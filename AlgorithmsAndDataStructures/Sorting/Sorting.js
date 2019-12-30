// swaps 2 indexes in an array
// i being index and j being the new index
const swap = (array, i, j)=>{
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

// this class does all of the splitting of an array into 
// smaller and smaller pieces
// this function is dependent on merger
const mergeSort = (array, count=0)=>{
    if (array.length <= 1) {
        return array;
    }
    // find the middle of the array
    const middle = Math.floor(array.length / 2);
    // slice off the first half
    let left = array.slice(0, middle);
    // slice the second half
    let right = array.slice(middle, array.length);
    // break it down more
    left = mergeSort(left);
    // break it down farther
    right = mergeSort(right, count+1);
    if(count === 3 || count === 16)console.log(array);
    // merge the arrays back together
    return merge(left, right, array);
}

// this function sorts all of the 
// the right side of the array replaces the original left side and
// repeat until the array is sorted
const merge = (left, right, array)=>{
    // set all indexes to 0
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    // sort the array chunks as they come in
    while (leftIndex < left.length && rightIndex < right.length) {
        // check if the left is less than the right
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            // insert the larger data into the array
            array[outputIndex++] = right[rightIndex++];
        }
    }
    // add the left back on to the array
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    // put the right index back on to the array
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

// this function move the smaller elements to the 
// front of the array so the first index will be the smallest
const quickSort = (array, start = 0, end = array.length)=>{
    if (start >= end) {
        return array;
    }
    // returns the previous start point
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

const partition = (array, start, end)=>{
    // the very last element of the array
    const pivot = array[end - 1];
    // the beginning of the array
    let j = start;
    for (let i = start; i < end - 1; i++) {
        // swap if the element is smaller than the pivot
        if (array[i] <= pivot) {
            // 
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
}

module.exports = {
    swap,
    mergeSort,
    merge,
    quickSort,
    partition,

};