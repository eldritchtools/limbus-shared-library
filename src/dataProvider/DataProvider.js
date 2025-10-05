import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function preprocess_data(path, data) {
    if (["egos", "identities_mini", "identities"].includes(path)) {
        return data.reduce((acc, [k, v]) => {
            acc[k] = {id: k, ...v}
            return acc;
        })
    }
}

export function DataProvider({ children }) {
    const [dataStore, setDataStore] = useState({});

    const getData = async (path) => {
        if (path in dataStore) return dataStore[path];

        const res = await fetch(path);
        const json = await res.json();

        setDataStore(prev => ({ ...prev, [path]: preprocess_data(path, json) }));
        return json;
    }

    return (
        <DataContext.Provider value={{ dataStore, getData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData(path) {
    const { dataStore, getData } = useContext(ProfileContext);
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
