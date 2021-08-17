// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should leave spaces as is", () => {
        const expected = "hello world";
        const actual = polybius.polybius("3251131343 2543241341", false)
        const expected1 = "3251131343 2543241341"
        const actual1 = polybius.polybius("hello world")
        expect(actual).to.equal(expected)
        expect(actual1).to.equal(expected1)
    });
    it("should encode a message by translating each letter to number pairs", () => {
        const expected = "4432423352125413";
        const actual = polybius.polybius("thinkful");
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = "4242";
        const actual = polybius.polybius("ij");
        expect(actual).to.equal(expected);
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "false";
        const actual = polybius.polybius("1211133451", false);
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const expected = "i/j";
        const actual = polybius.polybius('42', false)
        expect(actual).to.equal(expected)
    });
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius.polybius('1234567', false)
        expect(actual).to.be.false
    });
})