import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/MainCourses.module.scss';

const cards = [
  {
    image: '/imges/course-6.jpg',
    title: 'Noorani Qaida',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'If you are a beginner and don’t have any basic or previous knowledge about the Arabic language, then…',
    link: '/noraaniQaida',
  },
  {
    image: '/imges/course-5.jpg',
    title: 'Tajweed ulQuran',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Tajweed is an Arabic word that means proficiency. Tajweed of the Holy Quran means applying principles that…',
    link: '/tajweedulQuran',
  },
  {
    image: '/imges/course-4.jpg',
    title: 'Quran Reading',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'The Quran has numerous benefits. It is the ultimate book with guidance from the divine for everyone…',
    link: '/quranReading',
  },
  {
    image: '/imges/reading.jpg',
    title: 'Quran Tafseer',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Tafseer came from the Arabic root word ‘fasr,’ meaning to explain or expound. It is a detailed…',
    link: '/learnTafseerQuran',
  },
  {
    image: '/imges/course-5 (1).jpg',
    title: 'Quran Ijaza',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'It grants permission to the holder to transmit specific collections of Hadith (prophetic sayings and actions)…',
    link: '/quranIjaza',
  },
  {
    image: '/imges/course-6 (1).jpg',
    title: 'Quran Memorization',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Memorization of the Holy Quran is a dream project for every Muslim. It’s one of the greatest blessings…',
    link: '/quranMemorization',
  },
  {
    image: '/imges/course-9.jpg',
    title: 'Learn Arabic',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Learning Arabic provides insight into the Arab culture, fostering a deeper understanding of traditions…',
    link: '/arabicLanguage',
  },
  {
    image: '/imges/course-10.jpg',
    title: 'Learn Ten Qirat',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Ten Qirat refers to ten distinct and historically recognized ways of reciting the Quran….',
    link: '/learnTenQirat',
  },
  {
    image: '/imges/course-11.jpg',
    title: 'Islamic Supplications',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Like any religious or cultural undertaking, Islamic education comes with challenges…..',
    link: '/islamicSupplications',
  },
  {
    image: '/imges/course-12.jpg',
    title: 'Pillars of Islam',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'The Pillars of Islam are the essential acts of worship and foundational principles that shape a Muslim’s daily…',
    link: '/pillarsofIslam',
  },
  {
    image: '/imges/course-115.jpg',
    title: 'Islamic Studies Junior Level',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: `Junior-level Islamic Studies introduces young students to Islam's core beliefs, practices, history, and cultural impact... `,
    link: '/juniorLevelCourse',
  },
  {
    image: '/imges/course-116.jpg',
    title: 'Islamic Studies Senior Level',
    subTitles: ['Lessons', 'Weeks', 'Enroll'],
    counts: [20, 10, 50],
    description: 'Explore the treasures of Islamic knowledge with our expertly designed senior-level Islam…',
    link: '/seniorLevelCourse',
  },
];

const MainCourses = () => {
  return (
    <div className={`container-fluid mt-5 ${styles.container}`}>
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className={`col-md-4 mb-4 d-flex ${styles.column}`}>
            <Link href={card.link} passHref   className={styles.link}>
                <div className={`card h-100 ${styles.card}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCourses;
