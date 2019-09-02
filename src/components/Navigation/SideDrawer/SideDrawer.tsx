import React from 'react'
import classes from './SideDrawer.module.css'
//import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

interface SideDrawerProps {
  open: boolean,
  closed(): void,
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    const attachedClasses = (props.open) 
      ? [classes.SideDrawer, classes.Open]
      : [classes.SideDrawer, classes.Close]
    return (
        <React.Fragment>
            <Backdrop 
                show={props.open}
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    {/*<Logo height="11%"/>*/}
                    {/*<Logo />*/}
                </div>
                <nav>
                    <NavigationItems 
                        //isAuthenticated={props.isAuth}
                    />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer;
