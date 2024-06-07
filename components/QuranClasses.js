import React from 'react';
import Image from 'next/image';
// import { Link } from 'react-router-dom';
import styles from '@/styles/components/QuranClasses.module.scss';


const classesData = [
    {
      imageSrc: '/imges/fifthBBox1.png',
      altText: 'Quran Classes for Kids',
      title: 'Quran Classes for Kids',
      details: [
        {
          heading: 'Captivating Syllabus:',
          description: 'Customized material featuring visuals, interactive exercises, and enjoyable quizzes to maintain the interest of young minds.',
        },
        {
          heading: 'Stories from the Quran:',
          description: 'Narrate and discuss stories of the prophets and other key figures to make the learning process engaging and relatable.',
        },
        {
          heading: 'Fundamental Tajweed Guidelines:',
          description: 'Present them in an enjoyable and easily comprehensible manner, perhaps incorporating rhymes or songs.',
        },
        {
          heading: 'Brief Surahs:',
          description: 'Concentrate on concise chapters for the purpose of memorization',
        },
        {
          heading: 'Adaptable Timetabling:',
          description: 'Take into account school hours and ensure lessons are concise to suit a child\'s attention span.',
        },
        {
          heading: 'Prioritizing Safety:',
          description: 'A child-friendly platform with supervised interactions, guaranteeing a secure environment.',
        },
      ],
      link: '/kids',
    },
    {
      imageSrc: '/imges/fifthBBox2.png',
      altText: 'Quran Classes for Adults',
      title: 'Quran Classes for Adults',
      details: [
        {
          heading: 'Thorough Tajweed Instruction:',
          description: 'Concentrate on the accurate pronunciation and intonation rules for more advanced learners.',
        },
        {
          heading: 'Tafsir & Context:',
          description: 'Delve into the depth of the Quranic verses, understanding their historical context and contemporary relevance.',
        },
        {
          heading: 'Practical Life Lessons:',
          description: 'Extract and implement teachings from the Quran into daily life.',
        },
        {
          heading: 'Memorization Techniques:',
          description: 'Provide advanced techniques for those interested in Hifz (memorization of the entire Quran).',
        },
        {
          heading: 'Community Building:',
          description: 'Foster discussions and debates.',
        },
        {
          heading: 'Application in Life:',
          description: 'Examine the practical application of Quranic teachings in day-to-day life, addressing especially the issues and challenges faced by modern Muslim men.',
        },
      ],
      link: '/adults',
    },
    {
      imageSrc: '/imges/11th-vector-1536x1380.png',
      altText: 'Quran Classes for Ladies',
      title: 'Quran Classes for Ladies',
      details: [
        {
          heading: 'Tailored Tajweed Techniques:',
          description: 'Concentrate on the correct pronunciation and intonation rules for more advanced learners.',
        },
        {
          heading: 'Tafsir Relevant to Women:',
          description: 'Delve into the depth of the Quranic verses, understanding their historical context and contemporary relevance.',
        },
        {
          heading: 'Privacy Considerations:',
          description: 'Extracting and implementing teachings from the Quran in daily life.',
        },
        {
          heading: 'Adaptable Scheduling:',
          description: 'Provide advanced techniques for those interested in Hifz (memorization of the entire Quran).',
        },
        {
          heading: 'Sisterhood Development:',
          description: 'Foster discussions and debates.',
        },
        {
          heading: 'Application in Life:',
          description: 'Examine the practical application of Quranic teachings in day-to-day life, addressing especially the issues and challenges faced by modern Muslim women.',
        },
      ],
      link: '/ladies',
    },
  ];

  const QuranClasses = () => {
    return (
      <div className={`container-fluid ${styles.cardContainer}`}>
        {classesData.map((item, index) => (
          <div className={`row ${styles.cardRow}`} key={index}>
            <div className={`col-md-3  d-none d-lg-block ${styles.columnOne}`}>
              <div className={`card ${styles.card}`}>
                <Image src={item.imageSrc} alt={item.altText} width={50} height={50} layout="responsive" className={`${styles.quranClassesImage}`} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
            <div className={`col-md-9 col-md-12 col-lg-8 ${styles.columnTwo}`}>
              <div className={`card ${styles.card}`}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <ul className="list-unstyled">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>
                        <span>{detail.heading}</span> {detail.description}
                      </li>
                    ))}
                  </ul>
                  {/* <Link to={item.link} className="btn btn-primary">Read more</Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default QuranClasses;
  
