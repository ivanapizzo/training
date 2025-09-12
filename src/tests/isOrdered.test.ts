import { describe, it, expect } from "vitest";
import {isOrdered} from '../isOrdered'


describe('isOrdered', () => {
    it('devuelve true para [] ordenado', () => {
        expect(isOrdered([])).toBe(true);
    })
    it('devuelve false si el array está desordenado', () => {
        expect(isOrdered([3, 1, 2])).toBe(false);
    });
    it('devuelve true si hay un solo numero porque no puede estar desordenado', () => {
        expect(isOrdered([2])).toBe(true);
    });
    it('devuelve true si hay valores negativos si también están ordenados', () => {
        expect(isOrdered([-5, -2, 0, 3])).toBe(true);
    })
    it('devuelve false si hay valores negativos y estan deesordenados', () => {
        expect(isOrdered([-1, -5, -3, 4, 3])).toBe(false);
    })
});
