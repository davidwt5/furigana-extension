# furigana-extension
A chrome extension that injects furigana into all kanji in a given HTML page.

## Resources Used
- [Goo's Japanese Morphological Analysis API](https://labs.goo.ne.jp/api/en/morphological-analysis/): This App wouldn't be possible without it
- [Rikai's Kanji Tables](http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml): Comprehensive listing of Japanese character's unicode mappings

## Known Issues:
- Interaction with existing ruby elements causing some text to be trimmed
- API throttling issues when used on a large HTML text file with many nodes
