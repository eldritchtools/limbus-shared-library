## Gift

Provides `Gift`, `GiftTooltip`, and `FusionRecipe` components to display gifts and their tooltips.

`Gift` has the following props:
- `id` - The id of the gift.
- `gift` - Optional gift object. Prioritized over `id` if provided. 
- `enhanceRank` - (integer) Rank of enhancement (0-2). Defaults to 0.
- `scale` - (decimal) The scale of the image. At the default value of 1 scale, the image is set to 96x96 pixels.
- `text` - (boolean) Whether to display text instead of the icon. Defaults to `false`.
- `includeTooltip` - (boolean) Whether to display a tooltip when hovering over this instance of the gift. Defaults to `true`.
- `expandable` - (boolean) Whether clicking on the gift will show a modal that shows its complete information. Defaults to `true`.
- `expandOverride` - (boolean) An override to the expand state. Used if you want to show the modal through another condition outside of just clicking the modal.
- `setExpandOverride` - (function) Function to call when the modal is closed. Sends `false` as a parameter during the function call. 

`GiftTooltip` has no props, but must be placed somewhere in the React project using this library in order for the tooltips from `Gift` to be displayed. Preferrably somewhere near the top level of the body.

`FusionRecipe` is a convenience function for `Gift`'s expandable modal functionality and is also used in the MD site.
- `recipe` - An object with the following properties:
    - `id` - The id of the gift that's the product of the fusion.
    - `ingredients` - List of ids or objects refering to the ingredients of the fusion. Objects must contain `options` which is a list of ids and `count` which is an integer.
- `includeProduct` - (boolean) Whether to include the product in the equation. Defaults to `true`