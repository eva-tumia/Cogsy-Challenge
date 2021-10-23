/*
Write a function which takes an array containing either ints or arrays of ints and return a flat array.
Input: [1, [2, [ [3, 4], 5], 6]] 
Output: [1, 2, 3, 4, 5, 6]  

A few notes, please:
 - this should be resolved using Javascript (there's a Array.prototype.flat method, but please don't use that :) )
 - add it to a project on github
 - automated tests are definitely appreciated 
 - write a small readme on how to checkout the project and run the tests 

*/

function toFlatArray(array){
    if(!Array.isArray(array))
        throw new Error('Input incorrect !');
    return toFlatArrayRec(array);
}


function toFlatArrayRec(array){
    let flatArray = [];
    for(let i=0; i<array.length; i++){
        if(Number.isInteger(array[i]))
            flatArray.push(array[i]);
        else if(Array.isArray(array[i]))
            Array.prototype.push.apply(flatArray, toFlatArrayRec(array[i])); 
            //flatArray = flatArray.concat(toFlatArray(array[i]))   => a bit more intuitive but less efficient
        else
            throw new Error('Input incorrect !');
    }
    return flatArray;
}

module.exports = toFlatArray;

