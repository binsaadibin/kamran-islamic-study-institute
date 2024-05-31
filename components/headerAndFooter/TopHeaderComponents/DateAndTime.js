import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from '../../../styles/components/headerAndFooter/TopHeaderComponent/DateAndTime.module.scss';

function DateAndTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const generateRandomSeconds = () => {
      const randomSeconds = Math.floor(Math.random() * 60);
      return randomSeconds < 10 ? `0${randomSeconds}` : `${randomSeconds}`;
    };

    const updateCurrentTime = () => {
      const now = moment();
      const formattedTime = now.format(`DD/MM/YYYY hh:mm:${generateRandomSeconds()} a`);
      setCurrentTime(formattedTime);
    };

    updateCurrentTime(); // Update the time immediately

    const intervalId = setInterval(updateCurrentTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <div>
      <p className={styles.dateAndTime}>{currentTime}</p>
    </div>
  );
}

export default DateAndTime;
