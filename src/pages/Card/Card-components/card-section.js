import React from 'react';
import styles from './card-section.module.scss';
import './card-section.module.scss';

export default function CardSection(props) {
 return (
  <div className={styles.section}>
   <div className={styles.sectionSubtitle}>{props.title}</div>
   <div className={styles.sectionDesc}>{props.desc}</div>
  </div>
 );
}
