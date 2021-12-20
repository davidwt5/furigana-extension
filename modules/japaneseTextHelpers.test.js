const { replaceKanjiWithHiragana } = require("./japaneseTextHelpers.js");

test("One Kanji", async () => {
  const text = "火";
  const result = await replaceKanjiWithHiragana(text);
  expect(result).toBe("ひ");
});

test("Phrase with hiragana", async () => {
  const text = "日本語が上手ですね";
  const result = await replaceKanjiWithHiragana(text);
  expect(result).toBe("にほんごがじょうずですね");
})

test("Phrase with katakana and special characters", async () => {
  const text = "火は英語で「ファイアー」です"
  const result = await replaceKanjiWithHiragana(text);
  expect(result).toBe("ひはえいごで「ファイアー」です");
});

test("English text with special characters", async () => {
  const text = "I can't speak Japanese ;("
  const result = await replaceKanjiWithHiragana(text);
  expect(result).toBe("I can't speak Japanese ;(");
});

