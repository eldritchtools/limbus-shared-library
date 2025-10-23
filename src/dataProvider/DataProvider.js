import { createContext, useContext, useState, useEffect, useRef } from "react";
import { DATA_ROOT } from "../paths";

const DataContext = createContext();

function preprocess_data(path, data) {
    if (["egos_mini", "egos", "identities_mini", "identities", "gifts"].includes(path)) {
        return Object.entries(data).reduce((acc, [k, v]) => {
            acc[k] = {id: k, ...v}
            return acc;
        }, {});
    } else {
        return data;
    }
}

export function DataProvider({ children }) {
    const [dataStore, setDataStore] = useState({});
    const inFlight = useRef({});

    const getData = async (path) => {
        if (path in dataStore) return dataStore[path];
        if (inFlight.current[path]) return inFlight.current[path];

        const promise = (async () => {
            const res = await fetch(`${DATA_ROOT}/${path}.json`);
            const json = await res.json();
            const data = preprocess_data(path, json);

            setDataStore(prev => ({ ...prev, [path]: data }));
            delete inFlight.current[path];

            return data;
        })();

        inFlight.current[path] = promise;
        return promise;
    };

    return (
        <DataContext.Provider value={{ dataStore, getData }}>
            {children}
        </DataContext.Provider>
    );
}


export function useData(path) {
    const { dataStore, getData } = useContext(DataContext);
    const [data, setData] = useState(path in dataStore ? dataStore[path] : null);
    const [loading, setLoading] = useState(!data);

    useEffect(() => {
        if (!path || data) return;
        setLoading(true);

        getData(path)
            .then(fetched => setData(fetched))
            .finally(() => setLoading(false));
    }, [path]);

    return [data, loading];
}
