import React from 'react';
import './topbar.css'
import picture from '../../images/face2.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


const TopBar = () => {
  return (
  <div className='topbar'>
      <div className='topBarWrapper'>
          <div className='topLeft'>
              <span className='logo'>lamaadmin</span>
          </div>
          
          <div className='topRight'>
              <div className='topbarIcons'>
                <NotificationsIcon />
                <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIcons'>
                <LanguageIcon />
                <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIcons'>
                <SettingsIcon />
              </div>
              <img src={picture} alt='gee' className='topImage'/>
          </div>
      </div>
  </div>
  );
};

export default TopBar;
