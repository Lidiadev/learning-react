import React from 'react';  
import SearchResultsRow from './search-result-row';

const SearchResult = (props) => {
    const houseRows = props.filteredHouses.map(h =>
            <SearchResultsRow key={h.id} house={h} setActiveHouse={props.setActiveHouse}/>
        );

    return (
        <div className="mt-2">
            <h4>Results for {props.country}:</h4>
            <table className="table table-hover">
                <tbody>
                    {houseRows}
                </tbody>
            </table>
        </div>
    );
};

export default SearchResult;
