const { katakanaToHiragana } = require("./japaneseTextHelpers.js");

test("A katakana character", () => {
  expect(katakanaToHiragana("ア")).toBe("あ");
});

