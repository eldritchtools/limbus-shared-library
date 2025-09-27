## LimbusProvider

Context Provider used for maintaining data related to the Limbus Company library.

### Setup

Import in your project with `import { LimbusProvider } from '@eldritchtools/limbus-shared-library';` then wrap your entire app with the provider:

```
<LimbusProvider>
    <div className="App">
        ...
    </div>
</LimbusProvider>
```

`LimbusProvider` takes the following props:
- `loadStatuses` - (default: `true`) Whether to load the data for statuses
- `loadGifts` - (default: `false`) Whether to load the data for ego gifts
- `loadMdData` - (default: `false`) Whether to load the data related to mirror dungeons (theme packs and floor packs)

### Usage

The `useLimbusData` hook will be made available to the children of `LimbusProvider`. It contains the following properties:

- `statuses` - List of statuses
- `gifts` - List of ego gifts
- `themePacks` - List or mirror dungeon theme packs
- `floorPacks` - List or mirror dungeon floor packs (available theme packs per floor)

Each of these properties will be `null` by default if they are either not loaded or still being loaded. Deconstruct the return value to access the data.
