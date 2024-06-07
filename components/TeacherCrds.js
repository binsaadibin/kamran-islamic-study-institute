import React from 'react';
import styles from '@/styles/components/TeacherCard.module.scss';
import Image from 'next/image';

const TeacherCard = () => {
  const teachersData = [
    {
      name: 'Waheedullah',
      imageUrl: '/imges/muslim-men.svg',
      altText: 'Teacher Image 1',
    },
    {
      name: 'Kamran Nawaz',
      imageUrl: '/imges/muslim-men.svg',
      altText: 'Teacher Image 2',
    },
    {
      name: 'Maaz Abdullah',
      imageUrl: '/imges/muslim-men.svg',
      altText: 'Teacher Image 3',
    },
    {
      name: 'Asma Hassan',
      imageUrl: '/imges/muslim-women.svg',
      altText: 'Teacher Image 4',
    },
    {
      name: 'Masood ur Rehman',
      imageUrl: '/imges/muslim-men.svg',
      altText: 'Teacher Image 4',
    },
    {
      name: 'Muhammad Saleem',
      imageUrl: '/imges/muslim-men.svg',
      altText: 'Teacher Image 4',
    },
    // Add more teachers as needed
  ];

  return (
    <div className={`container-fluid ${styles.teacherContainer}`}>
      <div className={`row  justify-content-space-evenly ${styles.teacherRow}`}>
        {teachersData.map((teacher, index) => (
          <div key={index} className={`col-6 col-sm-4 col-md-2 ${styles.teacherColumn}`}>
            <div className={`card ${styles.card}`}>
              <div className="text-center">
                <Image src={teacher.imageUrl} alt={teacher.altText} width={50} height={50} className={styles.teacherCardsImage} layout="responsive" />
              </div>
              <div className="card-body">
                <p>{teacher.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCard;
