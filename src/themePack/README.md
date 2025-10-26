## Theme Pack

Provides `ThemePackImg` component to display theme packs and `getFloorsPerPack` and `getFloorsForPack` convenience functions.

`ThemePackImg` has the following props:
- `id` - The id of the theme pack.
- `themePack` - Optional theme pack object. Prioritized over `id` if provided.
- `displayName` - (boolean) Whether to display its name below the image.
- `scale` - (decimal) The scale of the image. At the default value of 1 scale, the image is set to 380x690 pixels.

`getFloorsPerPack` returns the floors where each theme pack appears in the form `{normal: {themePackId: [floors]}, hard: {themePackId: [floors]}}`.

`getFloorsForPack(themePackId)` returns the floors where the given theme pack appears in the form `{normal: [floors], hard: [floors]}`.