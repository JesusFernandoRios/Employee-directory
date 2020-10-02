import React, {useState}  from 'react';
import Content from './components/content';
import Header from './components/header'
import Search from './components/searchbar'
import friends from './employees.json'

function App() { 
  const [employee , setEmployee] = useState(friends)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  
  return (
    <div className="container">
      <Header/>
      <Search
      setSearch={setSearch}
      search={search}
      setEmployee={setEmployee}
      employee={employee}
      />
      <Content employee={employee}/>
    </div>
  );
}

export default App;
