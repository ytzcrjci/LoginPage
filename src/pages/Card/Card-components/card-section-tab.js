import React from 'react';
import './card-section-tab.module.scss';
import styles from './card-section-tab.module.scss';

export default function CardSectionTab(props) {
 return <div className={styles.sectionTitle}>{props.title}</div>;
}
