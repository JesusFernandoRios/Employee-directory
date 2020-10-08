import React from 'react'

function Search ({setSearch, search, employee, setFilter, filter,setEmployee}) {


    function updateSearchHandler({target}){
        
        const searchTerm = target.value
    
        setSearch(searchTerm)
        
        setFilter(employee.filter(res =>
            res.name.toLowerCase().includes(searchTerm)))
    }

    function sortEmployee () {

        console.log("clicked")

        setFilter(filter.sort(function(a,b){
            let nameA = a.name.toLowerCase()
            let nameB = b.name.toLowerCase()
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        }))
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
                <button onClick={sortEmployee}>Sort Alphabetically</button>
            </div>
        </section>
    )
}

export default Search;