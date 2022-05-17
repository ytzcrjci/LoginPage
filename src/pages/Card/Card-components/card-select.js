import React from 'react';
import './card-select.module.scss';
import styles from './card-select.module.scss';

export default function CardSelect(props) {
 return (
  <div className={styles.container} onClick={props.onclick}>
   <div className={styles.background}></div>
   <div className={styles.text}>
    <img src={props.src} alt={props.alt} />
    {props.title}
   </div>
  </div>
 );
}
