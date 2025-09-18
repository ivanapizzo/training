function swap (num1:number, num2:number): [number, number]{
    let num3 = num1; //ahora el num 3 es igual al valor 1
    num1 = num2; // ahora el valor 1 es igual al valor 2
    num2 = num3; //ahora el valor 2 es igual al valor 3 que es ya 1
    return [num1, num2];
}

console.log(swap(4, 5));
console.log(swap(9, 7));
console.log(swap(-3, 10));