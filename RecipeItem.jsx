import React, { Component } from 'react';
import './RecipeItem.css';

/*
This class models a recipe card, which is a box that displays a title, picture,
cook time, meal, and dietary restriction.
*/
class RecipeItem extends Component {
  constructor(props) {
    super(props);

    //default is empty -> info will be passed in from FilteredList
    this.state = {
      name: 'name',
      dietary: '',
      meal: '',
      time: 0,
      image: ''
    };
  }

  render(){
    return (
        <div className="recipeDiv">

        {/*
        The image of the recipe, displayed on the left.
        */}
          <figure className="figure">
            <img className = "recipePic" src={this.props.image} width="200" />
          </figure>

          {/*
          The text information of the recipe, including the title, meal, dietary
           restriction, and time.
          */}
          <div className="recipeInfo" >
            <h3 id="recipeName" >{this.props.name}</h3>
              <h5>Meal: <b>{this.props.meal}</b></h5>
              <h5>Diet: <b>{this.props.dietary}</b></h5>
            <h5>Cook Time: <b>{this.props.time} min</b></h5>
          </div>
        </div>
    );
  }
}

export default RecipeItem;
