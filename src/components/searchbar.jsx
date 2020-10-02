import React from 'react'
import employee from '../employees.json'


function Search ({setSearch, search}) {


    function updateSearch({target}){
        // just using for readability
        const searchTerm = target.value

        console.log(searchTerm)
        
        // used for updating the value in the search input, so it always equals exactly what is saved in state
        setSearch(searchTerm + "")
    }
    
    return(
        <section>
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                placeholder="Search By Name Here" aria-label="Search" 
                aria-describedby="button-addon2" 
                onChange={updateSearch}
                value={search}
                />
                <div className="input-group-append">
                    <span>{search}</span>
                </div>
            </div>
        </section>
    )
}

export default Search;