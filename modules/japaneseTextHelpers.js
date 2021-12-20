/*
    Contains helper functions that manipulate Japanese text
*/

const morphemesFetch = require("./morphemesFetch.js");

// Checks whether a given string contains Kanji
function hasKanji(str) {
  const regex = new RegExp("[\u4e00-\u9faf\u3400-\u4dbf]");
  return regex.test(str);
}

// Replace all kanji in a text with hiragana
async function replaceKanjiWithHiragana(text) {
  const word_list = (await morphemesFetch(text)).word_list;
  let convertedText = "";

  for (let sentence of word_list) {
    for (let morpheme of sentence) {
      hasKanji(morpheme[0])
        ? (convertedText += katakanaToHiragana(morpheme[2]))
        : (convertedText += morpheme[0]);
    }
  }

  return convertedText;
}

// Converts a full width katakana string into hiragana
// Some katakana only quirks like "ー" will be converted into an unusual character
// But this is only meant to work for kanji translated into katakana so this issue shouldn't arise
function katakanaToHiragana(katakana) {
  const CONVERSION_VALUE = 96; // Any full width katakana can be converted to hiragana by -96 to its unicode decimal value
  let hiragana = "";

  for (let i = 0; i < katakana.length; i++) {
    hiragana += String.fromCharCode(katakana.charCodeAt(i) - CONVERSION_VALUE);
  }

  return hiragana;
}

module.exports = { hasKanji, replaceKanjiWithHiragana, katakanaToHiragana };
