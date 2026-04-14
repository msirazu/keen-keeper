import DataContext from "./DataContext";

const DataProvider = ({ children }) => {

    const dataInfo = {
        name: 'a',
        pass: 123
    }

    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;