import egos from './egos.json';

const preprocessed = Object.entries(egos).reduce((acc, [k, v]) => {
    acc[k] = { id: k, ...v };
    return acc;
}, {});

export default preprocessed;