## Identity

Provides `IdentityImg` components to display identities.

`IdentityImg` has the following props:
- `id` - The id of the identity.
- `identity` - Optional identity object. Prioritized over `id` if provided. 
- `uptie` - (integer) Uptie level of id (1-4). Used to pick regular or uptie image.
- `displayName` - (boolean) Whether to include the name of the identity below the image.
- `scale` - (decimal) The scale of the image. At the default value of 1 scale, the image is set to 537x827 pixels.
