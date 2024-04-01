import { createContext, useContext } from "react";

const FavortiesContext = useContext({
    id: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavortiesContextProvider({children}) {
    return (
        <FavortiesContextProvider>{children}</FavortiesContextProvider>
    )
}

export default FavortiesContextProvider;