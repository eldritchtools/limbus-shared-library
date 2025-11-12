import identities from './identities.json' with {type: 'json'};
import identityTags from './identity_tag_list.json' with {type: 'json'};

const preprocessed = Object.entries(identities).reduce((acc, [k, v]) => {
    acc[k] = { id: k, ...v };
    return acc;
}, {});

export default preprocessed;
export { identityTags };