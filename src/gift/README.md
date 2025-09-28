## Gift

Provides `Gift` and `GiftTooltip` components to display gifts and their tooltips.

`Gift` has the following props:
- `id` - The id of the gift.
- `gift` - Optional gift object. Prioritized over `id` if provided. 
- `enhanceRank` - (integer) Rank of enhancement (0-2). Defaults to 0.
- `scale` - (decimal) The scale of the image. At the default value of 1 scale, the image is set to 96x96 pixels.
- `includeTooltip` - (boolean) Whether to display a tooltip when hovering over this instance of the gift. Defaults to `true`.

`GiftTooltip` has no props, but must be placed somewhere in the React project using this library in order for the tooltips from `Gift` to be displayed. Preferrably somewhere near the top level of the body.
