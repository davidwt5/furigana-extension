/**
Furaganise:
1) Use Morpho API to break up the phrase
2) Re-construct the the text where all the kanji is turned into hiragana
  - Append each morpheme to an empty string.
  - If said morpheme contains a kanji, append the hiraganised reading instead
  - Else append the morhpeme
3) Construct a html element out of it
*/

/* Helper functions */

const gooAppId =
  "96a2100947d34a115d881f15b3b59273ed6c0a8bae31e3ab29e98a45aab461f0";
async function morphemesFetch(string) {
  const morphemeBody = JSON.stringify({
    app_id: gooAppId,
    sentence: string,
    // info_filter: "form",
  });

  const response = await fetch("https://labs.goo.ne.jp/api/morph", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: morphemeBody,
  });

  return await response.json();
}

// Checks whether a given string contains Kanji
function hasKanji(str) {
  const regex = new RegExp("[\u4e00-\u9faf\u3400-\u4dbf]");
  return regex.test(str);
}

// Replace all kanji in a text with hiragana
// This function should generate a ruby innerhtml instead
async function replaceKanjiWithHiragana(text) {
  const word_list = (await morphemesFetch(text)).word_list;
  let convertedText = "";

  for (let sentence of word_list) {
    for (let morpheme of sentence) {
      hasKanji(morpheme[0])
        ? (convertedText += katakanaToHiragana(morpheme[2])) // Instead of replacing with hiragana, create a HTML using ruby
        : (convertedText += morpheme[0]);
    }
  }

  return convertedText;
}

// Generates a ruby html element with furigana for kanji characters
async function furiganise(text) {
  return "<ruby>日本語 <rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>";
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

/* Main function */

async function init() {
  const body = document.body;

  // Runs a DFS algorithm through a html node
  async function DFS(node) {
    for(let i=0; i<node.childNodes.length; i++) {
      DFS(node.childNodes[i]);
    }

    // Looking for text nodes that has non-white space data in it
    if(node.nodeName === "#text" && node.data.trim()) {
      // Parent node should only contain one thing inside; and that is the text node
      node.parentNode.innerHTML = await furiganise(node.data);
    }
  }

  DFS(body);

  /* Solution 1:
    DFS to reach every node
    If innerText is not empty, throw the text into the HTML generator
    Replace the innerHTML with the output

    Problem: Multiple API hits per page. If a page has a lot of nodes, could be too many hits.
  */

  /* Solution 2:
    DFS, every time we hit a leaf node with text, give it a data id property and save the text in an array
    combine the array into a single mega string and make the API call
    replace all the text with the modified text by looking up their IDs

    Problem: Run through the document multiple times, slower. But only a single API call.
  */
}

init();
