
import React from 'react';
const Search=()=>{
    return (
        <div className='searchText'>
            <form class="d-flex justify-content-center mt-3 mt-md-0 " role="search">
                <input class="form mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-danger" type="submit">Go</button>
            </form>
        </div>
    );
};
export default Search;  


