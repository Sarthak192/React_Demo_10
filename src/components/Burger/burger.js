import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './burger.css'

const burger = (props) => {
    let transfromIngredientIntoArray = Object.keys(props.ingredient).map(igKey=>{
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
            return <BurgerIngredient key = {igKey+i} type = {igKey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    }, [])
    if(transfromIngredientIntoArray.length === 0){
        transfromIngredientIntoArray = <p>Please add some ingredients</p>
    }
    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transfromIngredientIntoArray}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    )
}

export default burger;