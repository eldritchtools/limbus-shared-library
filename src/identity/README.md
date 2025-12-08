## Identity

Provides `IdentityImg` components to display identities.

`IdentityImg` has the following props:
- `id` - The id of the identity.
- `identity` - Optional identity object. Prioritized over `id` if provided. 
- `uptie` - (integer) Uptie level of id (1-4). Used to pick regular or uptie image.
- `displayName` - (boolean) Whether to include the name of the identity at the bottom right of the image.
- `displayRarity` - (boolean) Whether to include the rank of the identity at the top left of the image.
- `scale` - (decimal) The scale of the image. The image is set to 256x256 pixels at 1 scale.
- `size` - (integer) Optional size in pixels, overrides `scale`.
- `width` - (string) Optional width css parameter, overrides `scale` and `size`.
- `style` - Optional inline style parameter.

Size is set to `"100%"` width and `"auto"` height if `scale`, `size`, and `width` are not provided.