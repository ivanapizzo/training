import { describe, it, expect } from 'vitest';
import { customSort } from '../customSort'
import { isOrdered } from '../isOrdered';
import { sameMultiset } from './Helpers/sameMultiset';

describe('customSort (suite mínima)', () => {
  it('devuelve un array ordenado', () => {
    const input = [4, 1, 3, 2];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);
    expect(sameMultiset(out, input)).toBe(true);
  });

  it('conserva el tamaño', () => {
    const input = [7, 1, 7, 2, 7];
    const out = customSort(input);
    expect(out.length).toBe(input.length);
    expect(isOrdered(out)).toBe(true);  
    expect(sameMultiset(out, input)).toBe(true);
  });

  it('array vacío → vacío', () => {
    const input = [];
    const out = customSort(input);
    expect(customSort([])).toEqual([]);
    expect(sameMultiset(out, input)).toBe(true);
  });

  it('un solo elemento → igual', () => {
    const input = [34];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);  
    expect(customSort([42])).toEqual([42]);
    expect(sameMultiset(out, input)).toBe(true);
  });

  it('maneja negativos y mezcla', () => {
    const input = [0, -2, 5, -1, 4];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);
    expect(out.length).toBe(input.length);
    expect(sameMultiset(out, input)).toBe(true);
  });

  it('ya ordenado con repetidos se mantiene ordenado', () => {
    const input = [1, 1, 2, 2, 3];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);
    expect(sameMultiset(out, input)).toBe(true);
  });
});
