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
  replaceKanjiWithHiragana,
} = require("./modules/japaneseTextHelpers.js");

const morphemesFetch = require("./modules/morphemesFetch.js");
const text = "遠く";
morphemesFetch(text).then((res) => console.log(res.word_list));