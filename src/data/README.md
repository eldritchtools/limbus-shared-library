## Data

Provides `pals` and `passives` data.

`pals` is a dict mapping pal ids to pal objects each containing the following fields:
- `id`: The internal id of the pal
- `no`: The palpedia number of the pal. "-1" is used for pals without a palpedia number (Terraria collab pals).
- `sortIndex` - Number used to determine the sort order of pals, based on palpedia number.
- `name` - The name of the pal.
- `breedingPower` - The breeding power of the pal, used to compute for the child when breeding.
- `tiebreakIndex` - Index used when tiebreaking breeding results, based on order in the game files.
- `iconPath` - Path to the icon from the `palIcons` directory
- `unique` - Whether the pal has unique breeding pairs.
- `parents` - List of parent pairs that produce this pal as a child. Each pair is a list of two ids corresponding to pals. Only available if `unique` is `true`.

`passives` is a list of passives each containing the following fields:
- `name` - The name of the passive
- `rank` - The rank of the passive (ranges from -3 to 4)
