import React from 'react'

function Search ({setSearch, search, employee, setFilter, filter, setEmployee}) {


    function updateSearchHandler({target}){
        
        const searchTerm = target.value
    
        setSearch(searchTerm)
        
        setFilter(employee.filter(res =>
            res.name.toLowerCase().includes(searchTerm)))
    }
    
    const sortBtn = () => {

        let newFilter = filter.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
        setEmployee(newFilter)
        console.log(newFilter)
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
                <button onClick={sortBtn}>Sort Alphabetically</button>
            </div>
        </section>
    )
}

export default Search;