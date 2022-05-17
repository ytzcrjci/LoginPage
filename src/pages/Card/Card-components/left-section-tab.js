import React from 'react';
import styles from './left-section-tab.module.scss';
import './left-section-tab.module.scss';

export default function LeftSectionTab(props) {
 return (
  <div className={styles.container}>
   <div className={styles.title}>{props.title}</div>
   <div className={styles.desc}>{props.desc}</div>
  </div>
 );
}
