import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

interface NavigationItemsProps {

}

const NavigationItems: React.FC<NavigationItemsProps> = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem
                link="/"
                exact
                active={false}
            >
                CHANGEME
              </NavigationItem>
        </ul>
    );
};

export default NavigationItems;