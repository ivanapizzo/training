export function sameMultiset(a: number[], b: number[]): boolean {
    if (a.length !== b.length){ ///misma cantidad de elementos en el array
        return false;
    }   
    const myMap = new Map<number, number>();
    for (const c of a) {
        const value = myMap.get(c) ?? 0;
        myMap.set(c, value +1)
    } 
    for (let i = 0; i < b.length; i++){
        const value = b[i]
        if (!myMap.has(value)) 
            return false;
        const otroValue = (myMap.get(value) as number) -1;
        if (otroValue < 0) return false;
        if (otroValue === 0) myMap.delete(value); else myMap.set(value, otroValue);
    } 
    return myMap.size === 0;// temporal para que tus tests compilen
}
