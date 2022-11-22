/* Encuentra el máximo */

/* UNO */

export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
        return num1;
        } else if (num1 < num2) {
        return num2;    
    } else {return num1;}}

/* DOS */

export function findLongestWord(word){
    let result = word.sort((a,b)=>
        b.length - a.length)
        return result[0];}

/* TRES */
   
export function sumArray(array){
    let addition = 0;
    for (let i = 0; i < array.length; i++){
    addition += array[i];
    }
    return addition;
}

/* CUATRO */

export function averageNumbers(list){
    if (!list.length) return undefined
    return sumArray(list) / list.length;
}

/* CINCO */

export function averageWordLength(array){
if (!array.length) return undefined
return array.join(' ') .length/array.length
}

/* SEIS */

export function uniquifyArray(){}

/* SIETE */

export function doesWordExist(){}

/* OCHO */

export function howManyTimes(){}

/* NUEVE */
export function greatestProduct(){}





