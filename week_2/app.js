/////////////// TASK 1 //////////////
// Write a JavaScript function that reverse an integer number.

function reverseNumber(num) {
    let result;
    (num >= 0) 
    ? result = Array.from(num.toString()).reverse().join('') 
    : result = Array.from(num.toString()).shift() + Array.from(num.toString()).slice(1).reverse().join('')
    return +result;
}

/////////////// TASK 2 //////////////
//Write function, which iterates over array and executes function on each element.

function forEach(array, func) {
    array.forEach(item => func(item))
}

/////////////// TASK 3 //////////////
//Write function, which returns transformed array based on function, which is passed as a
//parameter. Reuse function from task 2.

function map(array, func){
    return array.map(item => func(item))
}

/////////////// TASK 4 //////////////
//Write function, which returns filtered array based on function, which passed as a parameter.
//Reuse function from task 2.

function filter(array, func) {
   return array.filter(func)
}

/////////////// TASK 5 //////////////
//Write function, which returns array of names of people, who are over 18 and their favorite
//fruit is apple. Reuse functions from task 3 and 4.
//See input data example in CODE section

function getAdultAppleLovers(data){
    let result = filter(data, function(el) { return el.age > 18 && el.favoriteFruit === 'apple'})
    return result.map(item => item.name)
}

/////////////// TASK 6 //////////////
//Write function, which returns array of keys of an object.

function getKeys(arr){
    return Object.keys(arr)
}

/////////////// TASK 7 //////////////
// Write function, which returns array of values of an object.

function getValues(arr){
    return Object.values(arr)
}

/////////////// TASK 8 //////////////
//Write function, which returns formatted date.

function showFormattedDate(date){
    const shortMonth = date.toLocaleString('en-us', { month: 'short' });
    console.log(`It is ${date.getDate()} of ${shortMonth}, ${date.getFullYear()}`);
}

showFormattedDate(new Date('2018-08-27T01:10:00')) // returns ‘It is 27 of Aug, 2018’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
