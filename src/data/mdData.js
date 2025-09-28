import floorPacks from './md_floor_packs.json';
import themePacks from './md_theme_packs.json';


// Add floors available to theme packs
const floorsPerPack = { normal: {}, hard: {} };
Object.entries(floorPacks.normal).forEach(([floor, packs]) => packs.forEach(pack => {
    if (pack in floorsPerPack.normal) floorsPerPack.normal[pack].push(floor);
    else floorsPerPack.normal[pack] = [floor];
}))
Object.entries(floorPacks.hard).forEach(([floor, packs]) => packs.forEach(pack => {
    if (pack in floorsPerPack.hard) floorsPerPack.hard[pack].push(floor);
    else floorsPerPack.hard[pack] = [floor];
}))

const preprocessed = {...themePacks};

Object.entries(floorsPerPack.normal).forEach(([pack, floors]) => preprocessed[pack]["normalFloors"] = floors);
Object.entries(floorsPerPack.hard).forEach(([pack, floors]) => preprocessed[pack]["hardFloors"] = floors);

export {floorPacks, preprocessed as themePacks};