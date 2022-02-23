//===================== CountOccurences.  TASK 1 =======================
function countOccurrences(str, substr) {
     let result = str.split(substr);
  return result.length - 1;  
}

//=====================  storage.  TASK 2 ========================
function storage() {

}

//=====================  toDigitArray.  TASK 3 ========================
function toDigitArray(N) {
    let numArr = N.toString().split('').reverse();
    return numArr.map(elem => parseInt(elem));
}

//=====================  calculateRoundedRating.  TASK 4 ========================
function calculateRoundedRating(rating) {
    return Math.ceil(rating*2)/2;
}

//=====================  countWords.  TASK 5 ========================
function countWords(text) {
   let textArray = text.trim().split(/ +/g);
   return textArray.length;
}

//=====================  extractYears.  TASK 6 ========================
function extractYears(text) {
    let numArr = text.split(' ').filter(num=> num >= 1900 && num <= 2099)
    return numArr.map(elem => parseInt(elem));
}
