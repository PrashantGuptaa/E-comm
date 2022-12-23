import './App.css';
import NavigationBar from './components/Navbar/navbar';
import ProductScreen from './components/Products/ProducrScreen';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <NavigationBar search={search} handleSearchChange={(e) => setSearch(e.target.value)} />
      <ProductScreen search={search} />
    </div>
  );
}

export default App;
