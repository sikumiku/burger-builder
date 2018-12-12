import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients) //give array of keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { // array with 2 elements [,]
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        });

  return (
      <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
      </div>
  );
};

export default burger;