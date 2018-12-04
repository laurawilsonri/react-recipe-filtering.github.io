import React, { Component } from 'react';
import { DropdownButton, Button, MenuItem } from 'react-bootstrap';
import List from './List';
import RecipeItem from './RecipeItem';
import './FilteredList.css';

/*
This class designates most of the layout for the page, which largely consists
of properly filtering and sorting the list of recipes and displaying them on
screen.
*/
class FilteredList extends Component {
  constructor(props) {
    super(props);

    //default filters and sort below
    this.state = {
      search: '',
      dietary: 'None',
      meal: 'All',
      sort: 'None',
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //Set the state of the "meal" state variable depending on what is passed in
  onMealFilter = (event) => {
      this.state.meal = event.state.meal;
  }

  //Set the state of the "dietary" state variable depending on what is passed in
  onVeganFilter = (event) => {
      this.state.dietary = event.state.dietary;
  }

  /*
  Filters an item, deciding whether it should be shown based on whether its
  meal and dietary properties are appropriate given the current state's filters.
  */
  filterItem = (item) => {
      if ((item.meal == this.state.meal || this.state.meal == "All")
            && (item.dietary == this.state.dietary || this.state.dietary == "None")){
        return item.name.toLowerCase().search(this.state.search) !== -1;
      }
  }

  /*
  Helps sort the item list based on the return value of this function by
  calculating the difference between elements of the list and ordering them
  based on their difference, if a sort mode is active.
  */
  sortItems = (a, b) => {
    const difference = a.time - b.time;

    //if no sort is selected, return 0, meaning no preferred order
    if (this.state.sort ==  "None") {
        return 0;
    }
    //if sort is Low -> High, then return the calculated difference
    if (this.state.sort == "Time (Low to High)") {
       return difference;
    }
    //else sort is High -> Low, in which case we need to negate the difference
    return -1 * difference;
  }

  /*
  When a meal filter is selected, this function sets the current state to the
  selected meal.
  */
  mealOnSelected = (eventKey) => {
      //set to event's meal
      this.setState({
        meal: eventKey,
      });

  }

  /*
  When a dietary filter is selected, this function sets the current state to the
  selected dietary option.
  */
  dietaryOnSelected = (eventKey) => {
      //set to event's dietary
      this.setState({
        dietary: eventKey
      });
  }

  /*
  When a sort is selected, this function sets the current state to the selected
  sort option.
  */
  sortOnSelected = (eventKey) => {
      //set to event's dietary
      this.setState({
        sort: eventKey
      });
  }

  /*
  When the reset button is clicked this function resets the state of the filters
  and sort to their default.
  */
  resetOnClick = (e) => {
    this.setState({
      dietary: 'None',
      meal: 'All',
      sort: 'None',
    })
  }

  render(){
    return (
        <div className = "filter-list">

        {/*
        Header that appears at the top of the page, with the title, slogan, and
        search bar.
        */}
          <div id="header">
                <h1 id="title">Recipe Box</h1>
                <h4 id="subTitle">All your favorite recipes at your fingertips</h4>
                {
                  //search logo & input bar
                }
                <div id="searchDiv">
                  <h3 className="dropLabel"> &#128270; </h3>
                  <input id="searchBar" type="text" placeholder="Search for recipe..." onChange={this.onSearch} />
              </div>
          </div>

          {/*
          Toolbar that contains the reset button, 2 filter drop-downs, the sort
          drop down.
          */}
          <div id="toolbar">
              <Button className="dropDown" id="resetBtn" onClick={this.resetOnClick}> Reset </Button>

              <h3 className="dropLabel"> Meal: </h3>
              <DropdownButton id="mealDropDown" className="dropDown" title={this.state.meal}>
                  <MenuItem eventKey="All" onSelect={this.mealOnSelected}>All</MenuItem>
                  <MenuItem eventKey="Breakfast" onSelect={this.mealOnSelected}>Breakfast</MenuItem>
                  <MenuItem eventKey="Dessert" onSelect={this.mealOnSelected}>Dessert</MenuItem>
              </DropdownButton>

              <h3 className="dropLabel"> Dietary Restriction: </h3>
            <DropdownButton className="dropDown" id="dropdown-size-large" className="dropDown" title={this.state.dietary}>
                <MenuItem eventKey="None" onSelect={this.dietaryOnSelected}>None</MenuItem>
                <MenuItem eventKey="Vegan" onSelect={this.dietaryOnSelected}>Vegan</MenuItem>
                <MenuItem eventKey="NonVegan" onSelect={this.dietaryOnSelected}>Non-Vegan</MenuItem>
            </DropdownButton>

            <h3 className="dropLabel"> Sort: </h3>
          <DropdownButton className="dropDown" id="sortDrop" className="dropDown" title={this.state.sort}>
              <MenuItem eventKey="None" onSelect={this.sortOnSelected}>None</MenuItem>
              <MenuItem eventKey="Time (Low to High)" onSelect={this.sortOnSelected}>Time (Low to High)</MenuItem>
              <MenuItem eventKey="Time (High to Low)" onSelect={this.sortOnSelected}>Time (High to Low)</MenuItem>
          </DropdownButton>
      </div>

      {/*
      The list of recipes that is filtered and sorted.
      */}
        <List id="itemsList" items={this.props.items.filter(this.filterItem).sort((a, b) => this.sortItems(a, b))} />
    </div>
    );
  }
}

export default FilteredList;
