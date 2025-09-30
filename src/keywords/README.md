## Keywords

Provides the following exports:

`keywords` - list of keywords as strings

`KeywordIcon` - Component that displays the icon for a specified keyword. Has the following props:
- `id` - The id of the keyword (taken from `keywords`).
- `size` - (integer) Size of the icon in pixels. Defaults to 32.

`KeywordSelector` - Component that allows the user to select keywords. Has the following props:
- `value` - Currently selected Keywords. Must consist of a list of items from `keywords`.
- `onChange` - Function to call whenever a keyword is toggled on or off. Typically tied to `value`. Receives the new list of selected keywords.
- `multiLine` - (default `false`) Whether to display the selector in one or multiple lines. `true` displays the keywords in 2 rows of 5 with keywordless and a clear all option on a 3rd row. `false` displays everything in one row.
