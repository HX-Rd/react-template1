import React from 'react';
import logoImage from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

interface LogoProps {
  height?: string,
  alt: string,
}

const Logo: React.FC<LogoProps> = (props) => {
  if (props.height) {
    return (
      <div className={classes.Logo} style={{ height: props.height }}>
        <img src={logoImage} alt={props.alt} />
      </div>
    )
  } else {
    return (
      <div className={classes.Logo}>
        <img src={logoImage} alt={props.alt} />
      </div>
    )
  }
}

export default Logo;