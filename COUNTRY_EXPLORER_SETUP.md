# Country Explorer Upgrade

Copy:
- `app_v2_explorer.js` -> `src/app.js`
- `country-data/country-info.json` -> `data/country-info.json`
- append `explorer.css` to `src/style.css`

New features:
- Country opens without auto-speaking.
- Capital, continent, currency and government fields when data exists.
- States/provinces/administrative divisions.
- State/province capital and leader when verified data exists.
- `More Info — Wikipedia` opens the country article in a new tab.
- Data is separated from UI code.
- All 195 existing countries remain available.
- Missing current-government data is not invented; it is displayed as pending.

For GitHub Pages:
```bash
cd ~/chiled_game
mkdir -p data
cp country-data/country-info.json data/country-info.json
cp app_v2_explorer.js src/app.js
cat explorer.css >> src/style.css
git add src/app.js src/style.css data/country-info.json
git commit -m "Add country explorer information"
git push
```
