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

//Solution 1
function toFlatArray(array){
    if(!Array.isArray(array))
        throw new Error('Input incorrect !');
    return toFlatArrayRecV1(array);
}

function toFlatArrayRecV1(array){
    return array.reduce((flatArray, current)=>{
        if(Number.isInteger(current)){
            flatArray.push(current);
            return flatArray
        }
        else if(Array.isArray(current)){
            Array.prototype.push.apply(flatArray, toFlatArrayRecV1(current)); 
            return flatArray
        }
        else
            throw new Error('Input incorrect !');
    },[])
}

//Solution 2
function toFlatArrayRecV2(array){
    return array.reduce((flatArray, current)=>{
        if((!Number.isInteger(current)) && !Array.isArray(current))
            throw new Error('Input incorrect !');
        flatArray =  flatArray.concat(Number.isInteger(current) ? current : toFlatArrayRecV2(current));
        return flatArray;
    },[])
}

module.exports = toFlatArray;

