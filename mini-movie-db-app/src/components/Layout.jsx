import ToggleTheme from "./ToggleTheme";
import Header from "./Header";
import Filter from "./Filter";
import { FilterProvider } from "../context/FilterContext";
import MovieCard from "./MovieCard";

import './MovieCard.css'


export default function Layout() {
    return(
            <FilterProvider>
                <section className="movieWrap">
                    <ToggleTheme />
                    <div className="movieInnerWrap">
                        <Header />
                        <Filter />
                        <MovieCard />
                    </div>
                </section>
            </FilterProvider>
    )
}