/*
  Furaganise:
  1) Use Morpho API to break up the phrase
  2) Re-construct the the text where all the kanji is turned into hiragana
    - Append each morpheme to an empty string.
    - If said morpheme contains a kanji, append the hiraganised reading instead
    - Else append the morhpeme
  3) Construct a html element out of it
*/


if(typeof init === 'undefined'){
  const init = function(){
    const injectElement = document.createElement('div');
    injectElement.className = 'rustyZone-element';
    injectElement.innerHTML = 'Hello From the Rusty Zone Element';
    document.body.appendChild(injectElement);
  }
  init();
}