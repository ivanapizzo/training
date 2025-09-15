import { describe, it, expect } from "vitest";
import { bigLetters } from "../toUppercase";


describe('toUppercase', () => { 
    it('make a sentence in capital letters', () => {
        expect(bigLetters("i am Tom Riddle")).toBe("I AM TOM RIDDLE")
    })
 })
