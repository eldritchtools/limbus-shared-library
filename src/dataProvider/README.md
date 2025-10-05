## DataProvider

Data Provider used for loading the data in this library.

### Setup

Wrap your entire App with this provider:

```
<DataProvider>
    <div className="App">
        ...
    </div>
</DataProvider>
```

### Usage

To use the data, import `useData` in whichever component you need to use data in then call `useData(path)` which returns `[data, loaded]`. `data` will initially be `null` but will automatically change to the actual data once it is downloaded. `loaded` will initially be `false` then change to `true` at the same time. If the data was already downloaded before, then both will immediately return the downloaded values. The following paths are available:

- `identities` - Data summaries for all identities
- `identities_mini` - Data for all identities reduced to bare minimum
- `identities/{id}` - Skill and passive data for the identity `id`
- `identity_tag_list` - List of faction tags for searching identities
- `egos` - Data summaries for all egos
- `egos/{id}` - Skill and passive data for the ego `id`
- `skill_tags` - Translation file for skill tags
- `statuses` - Data for all statuses
- `gifts` - Data for all ego gifts
- `md_theme_packs` - Data for all mirror dungeon theme packs
- `md_floor_packs` - Lists of available theme packs on each floor for each difficulty

Note that these data do not have the same preprocessing done for gifts and md data. Import them using their modules in data for those.