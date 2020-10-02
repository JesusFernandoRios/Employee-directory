import React, {useEffect, useState}  from 'react';
import Content from './components/content';
import Header from './components/header'
import Search from './components/searchbar'
import employees from './employees.json'

function App() { 
  const [employee , setEmployee] = useState(employees)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(employee)
  // filtered employee
  
  
  useEffect(() => {
    
  })
  
  
  return (
    <div className="container">
      <Header/>
      <Search
      setSearch={setSearch}
      search={search}
      setEmployee={setEmployee}
      employee={employee}
      setFilter={setFilter}
      />
      <Content filtered={filter} employee={employee}/>
    </div>
  );
}

export default App;

// employees stuff

// filter employees
//     start with all emplyee stuff
//     use the includes
