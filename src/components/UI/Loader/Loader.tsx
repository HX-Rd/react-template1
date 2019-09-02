import React from 'react';
import styles from './Loader.module.css';

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = props => {
  return (
    <div className={styles.Spinner}>Loading</div>
  );
}

export default Loader;