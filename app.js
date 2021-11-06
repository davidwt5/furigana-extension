// import JishoAPI from 'unofficial-jisho-api';
// const JishoAPI = require('unofficial-jisho-api');

// const jisho = new JishoAPI();

// jisho.searchForPhrase('暑い').then(result => {
//   // console.log(result.data);
//   console.log(result.data[0].japanese);
// });


// jisho.searchForPhrase('暑').then(result => {
//   console.log(result.data[0].japanese);
// });

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});