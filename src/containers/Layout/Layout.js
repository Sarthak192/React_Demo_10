import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/sideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer: true
    }

    sideDrawerClosehandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosehandler}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
        </Aux>
        )
    }
}

export default Layout;