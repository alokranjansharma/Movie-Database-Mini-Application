import { createContext, useContext, useState } from "react";

export const FilterContext = createContext(null);

export function FilterProvider({ children }) {
    const [searchValue, setSearchValue] = useState("");
    const resetFilter = () => {
        setSearchValue("");
        setFavourites([]);
    }
     const [favourites, setFavourites] = useState([]);

     const toggleFavourite = (id) => {
        setFavourites(prev =>
        prev.includes(id)
            ? prev.filter(fid => fid !== id)
            : [...prev, id]
        );
    };

    return(
        <FilterContext.Provider value={{toggleFavourite, favourites, setFavourites, searchValue, setSearchValue, resetFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilter() {
  return useContext(FilterContext);
}


