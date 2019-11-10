import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/orderSummary'

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    state = {
        ingredient : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchasabaleState = (ingredient) => {
        const sum = Object.keys(ingredient).map(igKey=>{
            return ingredient[igKey]
        }).reduce((sum,el)=>{
            return sum + el
        }, 0)
        this.setState({purchasable: sum > 0})
    }

    updatePurchasingState = () => {
        this.setState({purchasing: true})
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchasingContinueHandler = ()=> {
        alert("Continue")
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredient[type]
        const updatedCount = oldCount+1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newprice = oldPrice + priceAddition
        this.setState({totalPrice: newprice, ingredient: updatedIngredient})
        this.updatePurchasabaleState(updatedIngredient)
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredient[type]
        if(oldCount <= 0){
            return
        }
        const updatedCount = oldCount-1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount
        const priceSubtraction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newprice = oldPrice - priceSubtraction
        this.setState({totalPrice: newprice, ingredient: updatedIngredient})
        this.updatePurchasabaleState(updatedIngredient)
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredient
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchasingCancelHandler}>
                    <OrderSummary 
                        price = {this.state.totalPrice}
                        continue = {this.purchasingContinueHandler}
                        cancel = {this.purchasingCancelHandler} 
                        ingredient = {this.state.ingredient}/>
                </Modal>
                <Burger ingredient = {this.state.ingredient}/>
                <BuildControls
                    ordered = {this.updatePurchasingState} 
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}
                    ingredientAdded = {this.addIngredient}
                    ingredientRemoved = {this.removeIngredient}
                    disabled = {disabledInfo}/>
            </Aux>
        )
    }
}

export default BurgerBuilder