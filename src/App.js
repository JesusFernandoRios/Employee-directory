import React  from 'react';
import Content from './components/content';
import Header from './components/header'
import Search from './components/searchbar'


function App() {

  return (
    <div className="container">
      <Header/>
      <Search/>
      <Content/>
    </div>
  );
}

export default App;
