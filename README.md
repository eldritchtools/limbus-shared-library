## Limbus Shared Library

Just a repo for shared components for my Palworld projects.

Run `npm run build` before pushing updates to this project.

Add `"@eldritchtools/limbus-shared-library": "github:eldritchtools/limbus-shared-library"` to `dependencies` in `package.json` and run `npm install` to import this into other projects.

Provides the following:
- [Gift, GiftTooltip](src/gift) - Component to display ego gifts
- [Status, StatusTooltip](src/status) - Components to display a status
- [KeywordIcon](src/keywordIcon) - Components to display a keyword icon
- [LimbusProvider, useLimbusData](src/LimbusProvider) - Provider React object to pull the data from the library