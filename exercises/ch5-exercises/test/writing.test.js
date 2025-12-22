import { dominantDirection } from '../solutions/writing-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Dominant Writing Direction" from Chapter 5', () => {

  describe('Testing function dominantDirection()', () => {
    it('Should return "ltr" for English text', () => {
      const result = dominantDirection("Hello!");
      expect(result).to.equal("ltr");
    });

    it('Should return "rtl" for mixed text with more Arabic characters', () => {
      const result = dominantDirection("Hey, مساء الخير");
      expect(result).to.equal("rtl");
    });

    it('Should return "ltr" for simple English sentence', () => {
      const result = dominantDirection("This is a test");
      expect(result).to.equal("ltr");
    });

    it('Should handle text with only English characters', () => {
      const result = dominantDirection("JavaScript");
      expect(result).to.equal("ltr");
    });

    it('Should return "rtl" for predominantly Arabic text', () => {
      const result = dominantDirection("مرحبا");
      expect(result).to.equal("rtl");
    });

    it('Should handle mixed text with English majority', () => {
      const result = dominantDirection("Hello world مرحبا");
      expect(result).to.equal("ltr");
    });

    it('Should handle numbers and punctuation', () => {
      const result = dominantDirection("123 ABC!");
      expect(result).to.equal("ltr");
    });

    it('Should return "ltr" for text with special characters', () => {
      const result = dominantDirection("Hello @#$%");
      expect(result).to.equal("ltr");
    });
  });
});
