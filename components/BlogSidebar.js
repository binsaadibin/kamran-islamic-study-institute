import React from 'react';
import Link from 'next/link';
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import styles from '@/styles/components/BlogSidebar.module.scss';
import { FaRecycle, FaCalendarCheck, FaEnvelopeOpenText } from 'react-icons/fa';

const sidebarContent = [
  {
    type: 'features',
    title: 'Learn Quran Online In 3 Easy Steps',
    content: [
      {
        label: 'Step 01:',
        icon: FaRecycle,
        text: 'Book a Free Trial Class'
      },
      {
        label: 'Step 02:',
        icon: FaCalendarCheck,
        text: 'Take Your Free Lesson/Class'
      },
      {
        label: 'Step 03:',
        icon: FaEnvelopeOpenText,
        text: 'Finally, Enroll in Full Course'
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
      <span className={styles.span2}><contentItem.icon className={styles.icons} /></span>
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
    <Link href="tel:+1234567890">
      <span>
        <HiPhoneArrowUpRight className={styles.icon} />
      </span>
    </Link>
    <span>HELPLINE: +1234567890</span>
  </div>
</div>

        )
      ))}
    </div>
  );
};

export default BlogSidebar;
