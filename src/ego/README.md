## EGO

Provides `EgoImg` components to display identities.

`EgoImg` has the following props:
- `id` - The id of the ego.
- `ego` - Optional ego object. Prioritized over `id` if provided. 
- `type` - Determines which image to display. Either `"awaken"` or `"erosion"`, any other string will fail to find the correct image. 
- `banner` - Displays in banner type (4:1 aspect ratio, cropped).
- `displayName` - (boolean) Whether to include the name of the ego at the bottom right of the image.
- `displayRarity` - (boolean) Whether to include the rank of the ego at the top left of the image.
- `scale` - (decimal) The scale of the image. The image is set to 256x256 pixels at 1 scale.
- `size` - (integer) Optional size in pixels, overrides `scale`.
- `width` - (string) Optional width css parameter, overrides `scale` and `size`.
- `style` - Optional inline style parameter.

Size is set to `"100%"` width and `"auto"` height if `scale`, `size`, and `width` are not provided.