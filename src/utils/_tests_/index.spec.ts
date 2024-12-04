import { describe, it, expect } from 'vitest'
import { slugify } from '../index'

describe('slugify', () => {
    it('should convert text to lowercase', () => {
        expect(slugify('Hello World')).toBe('hello-world')
    })

    it('should remove diacritics', () => {
        expect(slugify('Héllo Wörld')).toBe('hello-world')
    })

    it('should trim whitespace', () => {
        expect(slugify('  Hello World  ')).toBe('hello-world')
    })

    it('should replace spaces with hyphens', () => {
        expect(slugify('Hello   World')).toBe('hello-world')
    })

    it('should remove special characters', () => {
        expect(slugify('Hello @ World!')).toBe('hello-world')
    })

    it('should handle empty strings', () => {
        expect(slugify('')).toBe('')
    })

    it('should handle strings with only special characters', () => {
        expect(slugify('!@#$%^&*()')).toBe('')
    })
})