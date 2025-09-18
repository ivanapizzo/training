function swap(num1, num2) {
    var num3 = num1; //ahora el num 3 es igual al valor 1
    num1 = num2; // ahora el valor 1 es igual al valor 2
    num2 = num3; //ahora el valor 2 es igual al valor 3 que es ya 1
    return num1 & num2;
}
swap(4, 5);
swap(9, 7);
swap(-3, 10);
