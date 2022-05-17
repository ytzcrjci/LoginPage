import React, { useState, useEffect } from 'react';
import styles from './card.module.scss';
import './card.module.scss';

import { useAuth } from '../../authContext/authContext';
import { useNavigate } from 'react-router-dom';

import CardSectionTab from './Card-components/card-section-tab';
import LeftSectionTab from './Card-components/left-section-tab';
import CardSection from './Card-components/card-section';
import CardSelect from './Card-components/card-select';
import SettingsSubpage from './Card-components/Card-subpages/Settings-subpage/settings-subpage';
import InfoSubpage from './Card-components/Card-subpages/Info-subpage/info-subpage';
import TermsSubpage from './Card-components/Card-subpages/Terms-subpage/terms-subpage';
import FormButton from '../../form/form-inputs/form-button';

export default function Card() {
 const navigate = useNavigate();
 const { user, logout } = useAuth();
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSelected, setIsSelected] = useState(1);

 function toggleChange(index) {
  setIsSelected(index);
 }
 function signout() {
  logout();
 }

 return (
  <div className={styles.fullContainer}>
   <div className={styles.topbar}>
    User Profile
    {user ? (
     <div onClick={signout}>
      Log out
      <img
       src="https://img.icons8.com/dotty/32/000000/logout-rounded-left.png"
       alt="settings"
      />
     </div>
    ) : (
     <div
      onClick={() => {
       navigate('/login');
      }}
     >
      Login
      <img
       src="https://img.icons8.com/dotty/32/000000/login-rounded-right.png"
       alt="settings"
      />
     </div>
    )}
   </div>
   <div className={styles.content}>
    <div className={styles.leftBar}>
     <div className={styles.userProfileImage}>
      <img
       src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
       alt="User Image"
       height="100%"
       width="100%"
      />
     </div>
     <div className={styles.userInfo}>
      <div className={styles.userName}>
       {user ? <div>Logged as: {user.email} </div> : "You've been logged out"}
      </div>
      <div className={styles.userDetails}>Male, 25 years old</div>
      <hr />
      <LeftSectionTab title="Phone number" desc="679 235 670" />
      <hr />
      <LeftSectionTab title="E-mail" desc="example@abc.com" />
      <hr />
      <LeftSectionTab
       title="Address"
       desc="156 Gladstone Ave, Ottawa, ON K2P 0Y3, Kanada"
      />
      <hr />
     </div>
     <CardSelect
      title="Personal Info"
      src="https://img.icons8.com/dotty/30/000000/info.png"
      alt="image"
      onclick={() => toggleChange(1)}
      onc={isSelected ? 'background' : ''}
     />
     <hr />
     <CardSelect
      title="Settings"
      src="https://img.icons8.com/dotty/30/000000/settings.png"
      onclick={() => toggleChange(2)}
      alt="image"
     />
     <hr />
     <CardSelect
      title="Terms and Conditions"
      src="https://img.icons8.com/dotty/30/000000/ok.png"
      onclick={() => toggleChange(3)}
      alt="image"
     />
    </div>
    <div className={styles.rightBar}>
     <div className={styles.navBar}>
      <div className={styles.previous}>
       <img
        src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-left-arrows-those-icons-fill-those-icons.png"
        width="15px"
        height="15px"
        alt="previous tab"
        style={{ margin: '0 10px 0 0' }}
       />
       Previous Tab
      </div>
      <div className={styles.current}>
       <b>Current Tab</b>
      </div>
      <div className={styles.next}>
       Next Tab
       <img
        src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-right-arrows-those-icons-fill-those-icons-1.png"
        alt="next tab"
        height="15px"
        width="15px"
        style={{ margin: '0 0 0 10px' }}
       />
      </div>
     </div>
     <div className={styles.context}>
      {isSelected === 1 ? <InfoSubpage /> : null}
      {isSelected === 2 ? <SettingsSubpage /> : null}
      {isSelected === 3 ? <TermsSubpage /> : null}
     </div>
    </div>
   </div>
  </div>
 );
}
