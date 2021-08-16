// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar")



describe("caesar", () => {
    it("should return false if shift is 0", () => {
        const expected = false;
        const actual = caesar.caesar("Thinkful", 0);
        expect(actual).to.equal(expected)
    })
})