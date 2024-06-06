import React from 'react';
import styles from '@/styles/components/CourseseHeading.module.scss';
import { FaBook } from 'react-icons/fa'; // Importing the book icon from react-icons

export default function CourseseHeading({ text }) {
  return (
    <div className={styles.heading}>
      <FaBook className={styles.icon} /> {/* Using FaBook icon from react-icons */}
      <h5>{text}</h5>
    </div>
  );
}

