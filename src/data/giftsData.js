import gifts from './gifts.json';

const preprocessed = Object.entries(gifts).reduce((acc, [k, v]) => {
    acc[k] = {id: k, ...v};
    return acc;
}, {});

const giftsNameMapping = Object.entries(gifts).reduce((acc, [k, v]) => {
    acc[v.names[0]] = k;
    return acc
}, {});

export default preprocessed;
export { giftsNameMapping };