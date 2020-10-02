import React from 'react'

function Search ({setSearch, search,employee,setEmployee}) {


    function updateSearchHandler({target}){
        // just using for readability
        const searchTerm = target.value

        console.log(target.value)
        
        // used for updating the value in the search input, so it always equals exactly what is saved in state
        setSearch(searchTerm)
        setEmployee(employee.filter(res =>
            res.name === searchTerm
        ))
    }
    
    return(
        <section>
            <div className="input-group mb-3">
                <input 
                type="text" className="form-control"
                placeholder="Search By Name Here" aria-label="Search" 
                aria-describedby="button-addon2" 
                onChange={updateSearchHandler}
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