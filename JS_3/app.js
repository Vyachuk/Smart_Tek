//////////////////////////////// ПОЧАТОК TASK 1 ////////////////////////////////////////////////////////////////////////////////////////

/**
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

const isEmpty = (object) => {
    const result = Object.values(object);
    for (let i = 0; i < result.length; i++) {
        if(typeof(result[i]) === 'undefined' 
        || typeof(result[i]) === 'null' 
        || typeof(result[i]) === 'NaN' 
        || typeof(result[i]) === '') return true;
        else return false;
    } 
};
  
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true
  


//////////////////////////////// ПОЧАТОК TASK 2 ////////////////////////////////////////////////////////////////////////////////////////
/**
  * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
  * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
  * @param {Object} firstObj - Объект с любыми значениями
  * @param {Object} secondObj - Объект с любыми значениями
  * @returns {boolean}
*/
const isEqualDeep = (...element) => {
    return JSON.stringify(element[0])===JSON.stringify(element[1]);
};
// const data = { a: 1, b: { c: 1 } };
// const data2 = { a: 1, b: { c: 1 } };
// const data3 = { a: 1, b: { c: 2 } };
// console.log(isEqualDeep(data, data2)); // true
// console.log(isEqualDeep(data, data3)); // false




//////////////////////////////// ПОЧАТОК TASK 3 ////////////////////////////////////////////////////////////////////////////////////////
/**
  * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
  * @param {Object<string | number>} firstObj - объект с примитивными значениями
  * @param {Object<string | number>} secondObj - объект с примитивными значениями
  * @returns {Object}
*/

const intersection = (firstObject, secondObject) => {
    let res;
    for(const key in firstObject){
        if(firstObject[key] === secondObject[key]){
            res = {
                ...res,
                [key]: firstObject[key],
            }
        }
    }
    return res;
};

const data = { a: 1, b: 2};
const data2 = { c: 1, b: 2};
console.log(intersection(data, data2)); // { b: 2 }

  
