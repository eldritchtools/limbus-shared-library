## EGO

Provides `EgoImg` components to display identities.

`EgoImg` has the following props:
- `id` - The id of the ego.
- `ego` - Optional ego object. Prioritized over `id` if provided. 
- `type` - Determines which image to display. Either `"awaken"` or `"erosion"`, any other string will fail to find the correct image. 
- `displayName` - (boolean) Whether to include the name of the identity below the image.
- `scale` - (decimal) The scale of the image. At the default value of 1 scale, the image is set to 256x256 pixels.
