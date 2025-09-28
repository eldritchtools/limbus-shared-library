import gifts from './gifts.json';

const preprocessed = Object.entries(gifts).reduce((acc, [k, v]) => {
    acc[k] = {id: k, ...v};
    return acc;
}, {});

export default preprocessed;