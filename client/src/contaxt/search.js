import { useState, useContext, createContext } from "react";

const searchContext = createContext();
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({
    keywords: "",
    results: [],
  });

  return (
    <searchContext.Provider value={[search, setSearch]}>
      {" "}
      {children}
    </searchContext.Provider>
  );
};

//custome hook
const useSearch = () => useContext(searchContext);

export { useSearch, SearchProvider };
