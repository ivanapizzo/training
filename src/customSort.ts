export function customSort(arr: number[]): number[] {
    const theArray : number[] = [];
    for (let i = 0; i < arr.length; i++) {
        theArray.push(arr[i]);
    }
    theArray.sort((a, b)=>a - b)
        
    return theArray;
    
  }
