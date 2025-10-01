import identities from './identities.json';
import identityTags from './identity_tag_list.json';

const preprocessed = Object.entries(identities).reduce((acc, [k, v]) => {
    acc[k] = { id: k, ...v };
    return acc;
}, {});

export default preprocessed;
export { identityTags };