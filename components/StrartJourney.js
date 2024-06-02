import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/StrartJourney.module.scss';
import { TiArrowForwardOutline } from 'react-icons/ti';

export default function StrartJourney() {
  return (
    <div className={`${styles.mainDiv} container-fluid`}>
      <div className="row">
        <div className={` col-md-8 ${styles.firstDiv}`}>
          <div>
            <h1>We prioritize quality and strive for student satisfaction.</h1>
          </div>
        </div>
        <div className={`col-md-4 ${styles.secondDiv}`}>
          <div>
            <Link href="/register" passHref>
              <button className={styles.button}>
                Start Your Journey <TiArrowForwardOutline className={styles.icon} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
