import React, {Component} from 'react';
import RecipeItem from './RecipeItem.jsx';

/*
The List component for this app that maps a list of key value pairs (representing
the info of each recipe) to the RecipeItem render, which displays it in the
format designated by the RecipeItem class.
*/
class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <RecipeItem key={item.name} name={item.name} meal={item.meal} dietary={item.dietary} image={item.image} time={item.time}/>
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
