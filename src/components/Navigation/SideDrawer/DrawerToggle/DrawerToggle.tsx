import React from 'react';
import styles from './DrawerToggle.module.css';

interface DrawerToggleProps {
  clicked(): void,
}

const DrawerToggle: React.FC<DrawerToggleProps> = (props) => {
    return (
        <div className={styles.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DrawerToggle;