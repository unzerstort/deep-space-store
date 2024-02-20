import { describe, it, expect } from 'vitest';
import { searchZipCode } from '../Forms/ZipCodeValidation.js';

describe('searchZipCode', () => {
    it('returns true for a valid 8-digit zip code', () => {
        expect(searchZipCode('12345678')).toBe(true);
    });

    it('returns false for a zip code with less than 8 digits', () => {
        expect(searchZipCode('1234567')).toBe(false);
    });

    it('returns false for a zip code with more than 8 digits', () => {
        expect(searchZipCode('123456789')).toBe(false);
    });

    it('returns true for a zip code with 8 digits and non-digit characters', () => {
        expect(searchZipCode('1234-5678')).toBe(true);
    });

    it('returns false for an empty string', () => {
        expect(searchZipCode('')).toBe(false);
    });

    it('returns false for a string with no digits', () => {
        expect(searchZipCode('abcdefgh')).toBe(false);
    });

    it('returns false for a zip code with less than 8 digits and non-digit characters', () => {
        expect(searchZipCode('123-456')).toBe(false);
    });

    it('returns false for a zip code with more than 8 digits and non-digit characters', () => {
        expect(searchZipCode('12-345-678-9')).toBe(false);
    });
});