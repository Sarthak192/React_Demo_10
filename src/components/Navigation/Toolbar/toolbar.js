import React from 'react'
import classes from './toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigationItems'
import DrawerToggle from '../DrawerToggle/drawerToggle'

const toolbar = (props)=> {
    return(
        <header className = {classes.toolbar}>
            <DrawerToggle clicked = {props.drawerToggleClicked}/>
            <div className = {classes.Logo}>
                <Logo />
            </div>
            <nav className = {classes.Desktoponly}>
                <NavigationItems />
            </nav>
        </header>
    )
    
}

export default toolbar