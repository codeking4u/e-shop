import React, {useState, useEffect} from 'react';

const App = () => {
  
  
  const [categories,setCategories] = useState([]);
  
  useEffect(() => {
    const productCat = [{
        name: 'Hats',
        key: 1
      },
      {
        name: 'Jackets',
        key: 2
      },
      {
        name: 'Sneakers',
        key: 3
      },
      {
        name: 'Womens',
        key: 4
      },
      {
        name: 'Mens',
        key: 5
      },
    ];
    
    setCategories(productCat)
  }, [])


  return (
    <div className="categories-container">
      {
        categories.map(category => {
          return (
          <div className="category-container" key={category.key}>
            <div className="category-body-container">
              <h2>{category.name}</h2>
              <p>Shop Now</p>
            </div>
          </div>
          );
        })
      }
      
    </div>
  );
}

export default App;
