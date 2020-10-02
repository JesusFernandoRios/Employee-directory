import React from 'react'

function Search ({setSearch, search,employee,setEmployee, setFilter}) {


    function updateSearchHandler({target}){
        
        const searchTerm = target.value

        console.log(target.value)
        
        setSearch(searchTerm)
        
        setFilter(employee.filter(res =>
            res.name.includes(searchTerm)))
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