/*
  Furaganise one phrase:
  1) Use Morpho API to break up the phrase
  2) Re-construct the the text where all the kanji is turned into hiragana
    - Append each morpheme to an empty string.
    - If said morpheme contains a kanji, append the hiraganised reading instead
    - Else append the morhpeme
  3) Construct a html element out of it (Do this later)
*/

const {
  hasKanji,
  replaceKanjiWithHiragana,
  katakanaToHiragana,
} = require("./modules/japaneseTextHelpers.js");

// One sentence
// const text = "持って行くウィキペディアWikipedia日本は僕の一番大好きな国！";
// console.log(await replaceKanjiWithHiragana(text));

// Multiple Sentences
const text = "初めまして。デビトです。二十二歳です。";
replaceKanjiWithHiragana(text).then((res) => console.log(res));
