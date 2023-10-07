import './App.css';
import { useState } from 'react';
import { filters } from './json/filters';
import { items } from './json/items';

function App() {
  const [products] = useState(items);
  const [activeFilters, setActiveFilters] = useState([]);

  const changeHandler = (value) => {
    if (activeFilters.includes(value)) {
      setActiveFilters(activeFilters.filter((f) => f !== value))
    }
    else {
      setActiveFilters([...activeFilters, value]);
    }
  }

  const filteredProducts = activeFilters.length === 0 ?
    products : products.filter((product) => activeFilters.some((item) => product.category.includes(item)));


  return (
    <div className="App">
      <div style={{ width: '80%', margin: 'auto' }}>
        <h1>MoonshotX Challenge</h1>
        <h2>Products</h2>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>{filters.map((item, idx) => <div key={idx} onClick={() => changeHandler(item)} style={{ cursor: 'pointer' }}>{item}{activeFilters.includes(item) && <div>*</div>}</div>)}</div>
          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', width: '80%', margin: '70px auto' }}>
            {
              filteredProducts.length > 0 ? filteredProducts.map((item, idx) => <div >{item.name}</div>) : <div style={{ marginTop: '50px' }}>No items found for this filter!</div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
