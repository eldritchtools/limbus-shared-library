## Status

Provides `Status` and `StatusTooltip` components to display statuses and their tooltips.

`Status` has the following props:
- `id` - The id of the status.
- `includeTooltip` - (boolean) Whether to display a tooltip when hovering over this instance of the status. Defaults to `true`.
- `includeName` - (boolean) Whether to display only the icon or the icon and the name. Defaults to `true`.

`StatusTooltip` has no props, but must be placed somewhere in the React project using this library in order for the tooltips from `Status` to be displayed. Preferrably somewhere near the top level of the body.
