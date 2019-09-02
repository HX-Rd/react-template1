import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

interface NavigationItemProps {
    link: string,
    exact: boolean,
    active: boolean,
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={{ pathname: props.link }}
                exact={props.exact}
                activeClassName={classes.active}
                className={props.active ? classes.active : undefined}
            >
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;