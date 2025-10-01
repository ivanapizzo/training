
export function customSort(arr: number[]): number[] {

  let unSuccessfull = true;

  while(unSuccessfull) {
    unSuccessfull = false;
    for (let i = 0; i <arr.length; i++){
      if (arr[i] > arr[i+1]){
        let auxiliar = arr[i]; // aux es 0 
        arr[i] = arr[i + 1];
        arr[i + 1] = auxiliar;

         unSuccessfull = true;
      }
    }
  }

    return arr;
  }

      // let a = 1
        // let b = 2
        // let cAux = 3

        // a = b; // 2
        // b = cAux; // 3
        // cAux = a; // 1 // 

  export function sameMultiset(a: number[], b: number[]): boolean[]{

    return [];
  }
  