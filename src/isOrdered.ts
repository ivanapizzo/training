export function isOrdered(array: number[]): boolean {

    for (let i = 0; i < array.length; i++){
        if (array[i] > array[i+1]){
            return false;
        } 
    } 
    return true;
}

console.log(isOrdered([0,2,4,7,12,14,17,21,27]));
console.log(isOrdered([27,4,2,12,14,0,7,21,17]));
console.log(isOrdered([1,2,3,4,5]));
console.log(isOrdered([9,6,5,4,3,3]));
