import React from 'react';
import Link from 'next/link';
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import styles from '@/styles/components/SideBar.module.scss';

const Sidebar = ({ sidebarContent }) => {
  return (
    <div className={styles.sidebar}>
      {sidebarContent.map((item, index) => (
        item.type === 'features' ? (
          <div key={index} className={styles.card1}>
            <h3>{item.title}</h3>
            <div className={styles.contentCard}>
              {item.content.map((contentItem, idx) => (
                <div key={idx}>
                  <span className={styles.span1}>{contentItem.label}</span>
                  <span className={styles.span2}>{contentItem.value}</span>
                </div>
              ))}
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <Link href={item.link}>
                <button>{item.buttonText}</button>
              </Link>
            </div>
          </div>
        ) : (
          <div key={index} className={styles.card2}>
          <p>{item.text}</p>
          <div>
            <Link href="tel:+923170547465">
              <span>
                <HiPhoneArrowUpRight className={styles.icon} />
              </span>
            </Link>
            <span>HELPLINE: +923170547465</span>
          </div>
        </div>
        )
      ))}
    </div>
  );
};

export default Sidebar;
