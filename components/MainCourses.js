// MainCourses.jsx
import Image from 'next/image';
import React from 'react';
import styles from '@/styles/components/MainCourses.module.scss';

const cards = [
  {
    image: '/imges/course-6.jpg',
    title: 'Noorani Qaida',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'If you are a beginner and don’t have any basic or previous knowledge about the Arabic language, then…',
  },
  {
    image: '/imges/course-5.jpg',
    title: 'Tajweed ulQuran',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Tajweed is an Arabic word that means proficiency. Tajweed of the Holy Quran means applying principles that…',
  },
  {
    image: '/imges/course-4.jpg',
    title: 'Quran Reading',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'The Quran has numerous benefits. It is the ultimate book with guidance from the divine for everyone…',
  },
  {
    image: '/imges/reading.jpg',
    title: 'Quran Tafseer',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Tafseer came from the Arabic root word ‘fasr,’ meaning to explain or expound. It is a detailed…',
  },
  {
    image: '/imges/course-5 (1).jpg',
    title: 'Quran Ijaza',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'It grants permission to the holder to transmit specific collections of Hadith (prophetic sayings and actions)…',
  },
  {
    image: '/imges/course-6 (1).jpg',
    title: 'Quran Memorization',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Memorization of the Holy Quran is a dream project for every Muslim. It’s one of the greatest blessings…',
  },
  {
    image: '/imges/course-9.jpg',
    title: 'Learn Arabic',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Learning Arabic provides insight into the Arab culture, fostering a deeper understanding of traditions…',
  },
  {
    image: '/imges/course-10.jpg',
    title: 'Learn Ten Qirat',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Ten Qirat refers to ten distinct and historically recognized ways of reciting the Quran….',
  },
  {
    image: '/imges/course-11.jpg',
    title: 'Islamic Supplications',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Like any religious or cultural undertaking, Islamic education comes with challenges…..',
  },
  {
    image: '/imges/course-12.jpg',
    title: 'Pillars of Islam',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'The Pillars of Islam are the essential acts of worship and foundational principles that shape a Muslim’s daily…',
  },
  {
    image: '/imges/course-115.jpg',
    title: 'Islamic Studies Junior Level',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: `Junior-level Islamic Studies introduces young students to Islam's core beliefs, practices, history,and cultural impact... `,
  },
  {
    image: '/imges/course-116.jpg',
    title: 'Islamic Studies Senior Level',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50], // Counts for each subtitle
    description: 'Explore the treasures of Islamic knowledge with our expertly designed senior-level Islam…',
  },

  // Add more card objects here...
];

const MainCourses = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className={`col-md-4 mb-4 d-flex ${styles.column}`}>
            <div className={`card ${styles.card}`}>
              <Image src={card.image} className={styles.image} alt={card.title} layout="responsive" width={300} height={200} />
              <div className="card-body d-flex flex-column">
                <h5 className={`card-title ${styles.title}`}>{card.title}</h5>
                <hr className="w-100" />
                <div className={`d-flex ${styles.subtitleWrapper}`}>
                  {card.subTitles.map((subTitle, idx) => (
                    <div key={idx} className={`d-flex flex-column align-items-center ${styles.subtitleContainer}`}>
                      <span className={`mb-2 ${styles.count}`}>{card.counts[idx]}</span>
                      <h6 className={styles.subTitle}>{subTitle}</h6>
                    </div>
                  ))}
                </div>
                <hr className="w-100" />
                <p className={`card-text ${styles.text}`}>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCourses;