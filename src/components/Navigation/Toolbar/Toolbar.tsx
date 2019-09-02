import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../UI/Logo/Logo';

interface ToolbarProps {
  drawerToggleClicked(): void,
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle
        clicked={props.drawerToggleClicked}
      />
      <nav className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Logo
            alt='CHANGEME'
          />
        </div>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Toolbar