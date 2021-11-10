/*
  Furaganise one phrase:
  1) Use Morpho API to break up the phrase
  2) Extract all morphene with kanji in it
  3) Throw them each into a hiragana converter
  4) Generate a ruby with the result
*/

import hiraganaFetchTest from "./scripts/hiraganaFetchTest.js";
hiraganaFetchTest();