## Image Handler

Provides `Icon`, `RarityImg`, `SinnerIcon` components to display images not handled by other comopnents.

`Icon` has the following props:
- `path` - Name of the icon image.
- `style` - Optional inline style parameter.

`RarityImg` has the following props:
- `rarity` - The rarity of the identity or ego. `1`, `2`, `3` for identities. `"zayin"`, `"teth"`, `"he"`, `"waw"`, `"aleph"` for egos.
- `style` - Optional inline style parameter.
- `alt` - (Boolean) Swaps to letter version. Only works for egos.

`SinnerIcon` has the following props:
- `num` - Sinner number (1-12).
- `style` - Optional inline style parameter.

## Utils

Provides `affinityColorMapping`.

`affinityColorMapping`: Mapping from `"wrath"`, `"lust"`, `"sloth"`, `"gluttony"`, `"gloom"`, `"pride"`, `"envy"` to hex color strings representing them.