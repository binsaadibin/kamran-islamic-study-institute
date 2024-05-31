import React from 'react'
import styles from '@/styles/components/CourseseHeading.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import

export default function CourseseHeading({text}) {
  return (
    <div className={styles.heading}>
            <FontAwesomeIcon icon={faBook} className={styles.icon} />
              <h5>{text}</h5>
    </div>
  )
}
