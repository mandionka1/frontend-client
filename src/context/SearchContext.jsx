
  import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};


export default SearchContext;








