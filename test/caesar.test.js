// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar")



describe("caesar()", () => {
    it("Should return false if shift is 0", () => {
        const actual = caesar.caesar("Thinkful", 0);
        expect(actual).to.be.false
    })
    it("Should return false if shift is > 25", () => {
        const actual = caesar.caesar("Thinkful", 26)
        expect(actual).to.be.false
    })
    it("Should return false if shift is < -25", () => {
        const actual = caesar.caesar("Thinkful", -30)
        expect(actual).to.be.false
    })
    it("Should encode by shifting letters", () => {
        const expected = "wklqnixo"
        const actual = caesar.caesar("thinkful", 3)
        expect(actual).to.equal(expected)
    })
    it("Should allow for shifting left with a negative shift", () => {
        const expected = 'qefkhcri'
        const actual = caesar.caesar("thinkful", -3)
        expect(actual).to.equal(expected)
    })
    it("Should shift in opposite direction if encode=false", () => {
        const expected = "thinkful"
        const actual = caesar.caesar("wklqnixo", 3, false)
        expect(actual).to.equal(expected)
    })
    it("Should leave spaces and other symbols as is, and ignore capitals", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar.caesar("This is a secret message!", 8)
        expect(actual).to.equal(expected)
    })
    it("Should wrap around if shifting past z or before a", () => {
        const expected = 'c'
        const actual = caesar.caesar("z", 3)
        const expected2 = 'x'
        const actual2 = caesar.caesar('a', -3)
        expect(actual).to.equal(expected)
        expect(actual2).to.equal(expected2)
    })

})