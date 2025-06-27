import { use } from "react";
import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
     const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem('favourites');
        if (storedFavs) setFavourites(JSON.parse(storedFavs));
        
    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (movie) => {
        setFavourites([...favourites, movie]);
    };

    const removeFavourite = (movieId) => {
        setFavourites(Prev => Prev.filter(movie => movie.id !== movie.id));
    };

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    };

    const value = {
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}