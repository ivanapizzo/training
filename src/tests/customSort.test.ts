import { describe, it, expect } from 'vitest';
import { customSort } from '../customSort'
import { isOrdered } from '../isOrdered';

describe('customSort (suite mínima)', () => {
  it('devuelve un array ordenado', () => {
    const input = [4, 1, 3, 2];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);
  });

  it('conserva el tamaño', () => {
    const input = [7, 1, 7, 2, 7];
    const out = customSort(input);
    expect(out.length).toBe(input.length);
  });

  it('array vacío → vacío', () => {
    expect(customSort([])).toEqual([]);
  });

  it('un solo elemento → igual', () => {
    expect(customSort([42])).toEqual([42]);
  });

  it('maneja negativos y mezcla', () => {
    const input = [0, -2, 5, -1, 4];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);
    expect(out.length).toBe(input.length);
  });

  it('ya ordenado con repetidos se mantiene ordenado', () => {
    const input = [1, 1, 2, 2, 3];
    const out = customSort(input);
    expect(isOrdered(out)).toBe(true);
  });
});
