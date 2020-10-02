import React, {useState}  from 'react';
import Content from './components/content';
import Header from './components/header'
import Search from './components/searchbar'
import employees from './employees.json'

function App() { 
  const [employee , setEmployee] = useState(employees)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(employee)
  
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
      <Content filtered={filter} setFilter={setFilter}/>
    </div>
  );
}

export default App;
