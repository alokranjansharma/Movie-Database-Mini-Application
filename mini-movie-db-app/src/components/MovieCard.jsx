import data from "../data/data"

import { useFilter } from "../context/FilterContext"

export default function MovieCard(){
    const {
        searchValue,
        favourites,
        toggleFavourite
    } = useFilter();

    const filteredMovies = data.filter(movie => 
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.tags.some(tag =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
        )
    );

    const favouriteMovies = data.filter(movie =>
        favourites.includes(movie.id)
    );

    return(
        <>
        <div className="moviesList">
            <div className="moviesLeft">
                <h3 className="heading">All Movies</h3>
                {searchValue && filteredMovies.length === 0 ? (
                    <p className="noResult">No movies found</p>
                ) : (
                    <ul>
                    {filteredMovies.map(movie => {
                        const isFavourite = favourites.includes(movie.id);

                        return (
                            <li className="movieList" key={movie.id}>
                            <div className="movieLeft">
                                <div className="movieLeftTop">
                                    <h6>{movie.title}</h6>
                                    <span>{movie.year}</span>
                                    <span>{movie.genre}</span>
                                </div>
                                <div className="movieLeftBottom">
                                    <span className="ratings">{movie.rating}</span>
                                    {movie.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="moviesFavourite">
                                <button className={`favBtn ${isFavourite ? "favourite" : "not-favourite"}`}
                                onClick={() => toggleFavourite(movie.id)}>
                                    {isFavourite ? (
                                        <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                            2 5.42 4.42 3 7.5 3
                                            9.24 3 10.91 3.81 12 5.08
                                            13.09 3.81 14.76 3 16.5 3
                                            19.58 3 22 5.42 22 8.5
                                            22 12.28 18.6 15.36 13.45 20.04
                                            L12 21.35z" />
                                    </svg>
                                ): (
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <path d="M12 21C12 21 4 13.5 4 8.5
                                            C4 5.42 6.42 3 9.5 3
                                            C11.24 3 12.91 3.81 14 5.08
                                            C15.09 3.81 16.76 3 18.5 3
                                            C21.58 3 24 5.42 24 8.5
                                            C24 13.5 16 21 16 21" />
                                    </svg>
                                )}
                                    Favourite
                                </button>
                            </div>
                        </li>
                        
                        );
                    })}
                </ul>
                )}
                
            </div>
            <div className="moviesRight">
                <h3 className="heading">Favourite Movies</h3>
                {favouriteMovies.length === 0 ? (
                        <p>No favourites yet.</p>
                ) : (
                    <ul>
                        {favouriteMovies.map(favMovie => (
                            <li key={favMovie.title}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <path d="M12 21C12 21 4 13.5 4 8.5
                                            C4 5.42 6.42 3 9.5 3
                                            C11.24 3 12.91 3.81 14 5.08
                                            C15.09 3.81 16.76 3 18.5 3
                                            C21.58 3 24 5.42 24 8.5
                                            C24 13.5 16 21 16 21" />
                                    </svg>
                                {favMovie.title} ({favMovie.year})
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </>
    )
}