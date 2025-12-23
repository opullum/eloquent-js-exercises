import { dominantDirection } from '../solutions/writing-solution.js';
import { expect } from 'chai';

describe('Solution testing for exercise "Dominant Writing Direction" from Chapter 5', () => {

  describe('Verifying functionality for dominantDirection()', () => {
    it('Returns "ltr" for fully English text', () => {
      const result = dominantDirection("Hello!");
      expect(result).to.equal("ltr");
    });

    it('Returns "rtl" for mixed text with more Arabic characters', () => {
      const result = dominantDirection("Hey, مساء الخير");
      expect(result).to.equal("rtl");
    });

    it('Returns "ltr" for simple English sentence', () => {
      const result = dominantDirection("This is a test");
      expect(result).to.equal("ltr");
    });

    it('Returns "rtl" for exclusively Arabic text', () => {
      const result = dominantDirection("مرحبا");
      expect(result).to.equal("rtl");
    });

    it('Returns "ltr" when provided text with English majority', () => {
      const result = dominantDirection("Hello world مرحبا");
      expect(result).to.equal("ltr");
    });

    it('Returns "ltr" when only provided numbers and punctuation', () => {
      const result = dominantDirection("123 ABC!");
      expect(result).to.equal("ltr");
    });

    it('Returns "ltr" for text with special characters', () => {
      const result = dominantDirection("Hello @#$%");
      expect(result).to.equal("ltr");
    });
  });
});
