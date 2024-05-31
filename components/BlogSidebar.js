import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/BlogSidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRecycle , faCalendarCheck ,faEnvelopeOpenText ,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const sidebarContent = [
  {
    type: 'features',
    title: 'Learn Quran Online In 3 Easy Steps',
    content: [
      { 
        label: 'Step 01:',
        value: <FontAwesomeIcon icon={ faRecycle } className={styles.iconsssssssssss} />,
        text:'Book a Free Trial Class'
        },
      {
         label: 'Step 02:',
          value: <FontAwesomeIcon icon={ faCalendarCheck }  className={styles.iconsssssssssss} />,
          text:'Take Your Free Lesson/Class'
         },
      {
         label: 'Step 03:',
          value: <FontAwesomeIcon icon={ faEnvelopeOpenText }    className={styles.iconsssssssssss} />,
          text:'Finally, Enroll in Full Course'
        },
    ],
  },
  {
    type: 'helpline',
    text: 'If you have any further query then you can contact our helpline',
  },
];





const BlogSidebar = () => {
  return (
    <div className={styles.sidebar}>
      {sidebarContent.map((item, index) => (
        item.type === 'features' ? (
          <div key={index} className={styles.card1}>
            <h3>{item.title}</h3>
            <div className={styles.contentCard}>
              {item.content.map((contentItem, idx) => (
                <div key={idx}> {/* Add key prop here */}
                  <div className={styles.steps}>
                    <span className={styles.span1}>{contentItem.label}</span>
                    <span className={styles.span2}>{contentItem.value}</span>
                  </div>
                  <p>{contentItem.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div key={index} className={styles.card2}>
            <p>{item.text}</p>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faPhoneVolume} />
              <span>HELPLINE: +923170547465</span>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default BlogSidebar;
