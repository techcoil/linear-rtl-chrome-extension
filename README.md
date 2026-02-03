# linear.app-rtl

Chrome extension that applies `dir="auto"` to Linear editors and contenteditable fields on
`https://linear.app/*`, so input direction follows the detected language.

## Install (local)
1. Open `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `extension` folder

## Files
- `extension/manifest.json` - Extension manifest (MV3)
- `extension/rtl-content.js` - Applies `dir="auto"` to editors
- `extension/content.css` - Placeholder (no styles)
- `extension/icons/icon-*.png` - Extension icons with RTL badge
- `assets/` - Source logo assets (favicon, base, badge)
