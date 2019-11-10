import React, {Component} from 'react';
import Button from '../../UI/Button/button'

class OrderSummary extends Component{
    componentWillUpdate(){
        console.log("[OrderSummary.js] componentWillUpdate")
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredient).map(igKey=>{
            return <li key = {igKey}>
                        <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredient[igKey]}
                    </li>
        })
        return(
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price is : <strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue To Checkout?</p>
                <Button clicked = {this.props.cancel} btnType = 'Danger'>CANCEL</Button>
                <Button clicked = {this.props.continue} btnType = 'Success'>CONTINUE</Button>
        </div>
        )
    }
} 

export default OrderSummary