// 1 //
function double(a: number, b: number ): number {
    const numberrr = (a + b) * 2; 
    console.log(numberrr)
    return numberrr
}
double(2,8);
double(4, 9);

// 2 //
function presentar(nombre: string, edad: number):string {
    
    const mensaje = (`Hola, soy ${nombre} y tengo ${edad} años`) ;
    console.log(mensaje)

   return mensaje;
}

presentar("Ivana", 28);

// 4 //
let colores: string[] = ["azul", "amarillo", "naranja", "verde", "rojo"]; 
colores.push("violeta");
console.log(colores)


// 3 // Lo hizo chatGPT aprendi un poco

function primeroString(arr: string[]): string | undefined {
    return arr[0];
  }
  
  console.log(primeroString(["a", "b", "c"]));


  function primero<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  primero([1, 2, 3]);        // ✅ funciona → T = number
  primero(["a", "b", "c"]);  // ✅ funciona → T = string
  primero([true, false]);    // ✅ funciona → T = boolean

// 5 //

function esMayorEdad (num : number) : string | boolean {
    if (num >= 18) {
        return('Mayor de edad');
    }
    return false;
}

console.log(esMayorEdad(18)); 
console.log(esMayorEdad(28)); 
console.log(esMayorEdad(7));  