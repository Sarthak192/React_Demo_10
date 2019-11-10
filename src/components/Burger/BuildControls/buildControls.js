import React from 'react'
import classes from './buildControls.css'
import BuildControl from './BuildControl/buildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {   
    return(
        <div className = {classes.BuildControls}>
            <p>Total Price is : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(igKey=>{
                return <BuildControl 
                    added = {()=>props.ingredientAdded(igKey.type)}
                    removed = {()=>props.ingredientRemoved(igKey.type)} 
                    label = {igKey.label} 
                    key = {igKey.label}
                    disabled = {props.disabled[igKey.type]}/>
            })}
            <button 
                onClick = {props.ordered}
                disabled = {!props.purchasable} 
                className = {classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default buildControls