import './App.css';
import { useEffect, useState } from 'react';
import Cocktails from './components/Cocktails';

function App() {

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const [initialDrink, setInitialDrink] = useState("")

  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
     fetch(`${url}${initialDrink}`).then((res) => {
       return res.json()
     }).then((data) => {
      // console.log(data)
      setCocktails(data.drinks)
    
     })
  },[initialDrink])

  // useEffect(() => {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  //     .then(response => response.json())
  //     .then(data => {
  //       setCocktails(data.drinks);
  //     })
  //     .catch(error => console.error(error));
  // }, []);
  return (
    <div className="App">
      
      <h1>Coctail Search App</h1>
      {console.log(cocktails)}
       {cocktails.length > 0 && cocktails.map(cocktail => {
            return  <div key={cocktail.idDrink}>
                      <h1>Hi</h1>
                      <h1>{cocktail.strDrink}</h1>
                    </div>
              {/* <Cocktails key={cocktail.idDrink} cocktail = {cocktail}/> */}
       })}

   
    </div>
  );
}

export default App;
