import React, { useState } from 'react';
import styles from './settings-subpage.module.scss';
import './settings-subpage.module.scss';
import CardSection from '../../card-section';
import CardSectionTab from '../../card-section-tab';
import CardSelect from '../../card-select';

export default function SettingsSubpage() {
 const [isState, setIsState] = useState(1);
 function toggleTab(index) {
  setIsState(index);
 }
 return (
  <div className={styles.container}>
   <div className={styles.leftContainer}>
    <div className={styles.tabs}>
     <div onClick={() => toggleTab(1)}>Tab 1</div>
     <div onClick={() => toggleTab(2)}>Tab 2</div>
     <div onClick={() => toggleTab(3)}>Tab 3</div>
    </div>
    <div className={styles.contentTab}>
     <div className={isState === 1 ? styles.active : styles.noactive}>
      Content 1
     </div>
     <div className={isState === 2 ? styles.active : styles.noactive}>
      Content 2
     </div>
     <div className={isState === 3 ? styles.active : styles.noactive}>
      Content 3
     </div>
    </div>
   </div>
   <div className={styles.rightContainer}>
    <CardSection title="Title 1" desc="Some description" />
    <CardSection title="Title 2" desc="Some description" />
    <CardSection title="Title 2" desc="Some description" />
    <CardSectionTab title="Some Tab" />
    <CardSection title="Title 2" desc="Some description" />
   </div>
  </div>
 );
}
