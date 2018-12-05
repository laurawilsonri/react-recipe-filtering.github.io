import React, { Component } from 'react';
import FilteredList from './FilteredList';
import RecipeItem from './RecipeItem';
import pump_c from './pumpkin_cheesecake.jpg';
import app_o from './apple_oatmeal.jpeg';
import ban_w from './banana_waffles.jpg';
import car_b from './caramel_brownies.jpg';
import choc_c from './choc_cupcakes.jpg';
import cinn_o from './cinn_oatmeal.jpg';
import edible_cd from './edible_cookie_dough.jpg';
import eggs_b from './eggs_benedict.jpg';
import maple_ic from './maple_ice_cream.jpeg';
import pump_p from './pumpkin_pancakes.jpg';
import samoa_d from './samoa_donut.jpg';
import stuffed_ft from './stuffed_french_toast.jpg';

/*
This list of recipes that is passed into the FilteredList component.
*/
const recipes = [
  {name: "Banana Waffles", meal: "Breakfast", dietary:"Vegan", image:ban_w, time:35},
  {name: "Caramel Brownies", meal: "Dessert", dietary:"NonVegan", image:car_b, time:40},
  {name: "Pumpkin Pancakes", meal: "Breakfast", dietary:"Vegan", image:pump_p, time:15},
  {name: "Samoa Donut", meal: "Breakfast", dietary:"NonVegan", image:samoa_d, time:60},
  {name: "Chocolate Cupcakes", meal: "Dessert", dietary:"Vegan", image:choc_c, time:65},
  {name: "Edible Cookie Dough", meal: "Dessert", dietary:"NonVegan", image:edible_cd, time:45},
  {name: "Stuffed French Toast", meal: "Breakfast", dietary:"NonVegan", image:stuffed_ft, time:50},
  {name: "Apple Overnight Oats", meal: "Breakfast", dietary:"Vegan", image:app_o, time:30},
  {name: "Pumpkin Cheesecake", meal: "Dessert", dietary:"NonVegan", image:pump_c, time:55},
  {name: "Cinnamon Oatmeal", meal: "Breakfast", dietary:"Vegan", image:cinn_o, time:10},
  {name: "Eggs Benedict", meal: "Breakfast", dietary:"NonVegan", image:eggs_b, time:25},
  {name: "Maple Icecream", meal: "Dessert", dietary:"NonVegan", image:maple_ic, time:120}
];

/*
The top-level Component App, which contains the main component FilteredList.
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        The list of recipes is passed into the FilteredList to be properly
        filtered and displayed.
        */}
      <FilteredList items={recipes}/>
      </div>
    );
    }
  }
export default App;
