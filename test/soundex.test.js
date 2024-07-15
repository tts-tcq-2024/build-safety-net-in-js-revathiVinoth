const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });

    it('should handle multiple characters but length is less than 4', () => {
        expect(generateSoundex("PK")).to.equal("P200");
    });
    it('should handle multiple characters with the length is more than 4 already', () => {
        expect(generateSoundex("PKGHYTJ")).to.equal("P232");
    });
    it('should handle multiple characters with repeated characters', () => {
        expect(generateSoundex("LLLHY")).to.equal("L000");
    });


});
