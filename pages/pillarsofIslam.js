import styles from '@/styles/pages/coursesstyle.module.scss';
import Sidebar from '@/components/SideBar';
import Layout from '../components/headerAndFooter/Layout';
import CourseseHeading from '@/components/CourseseHeading';
import Image from 'next/image';



const sidebarContent = [
  {
    type: 'features',
    title: 'Course Features',
    content: [
      { label: 'Course for:', value: 'Everyone' },
      { label: 'Level:', value: 'Beginner Only' },
      { label: 'Starting Fee:', value: '$30.00' },
    ],
    buttonText: 'ENROLL NOW',
    link: '/register', // The URL to navigate to when the button is clicked
  },
  {
    type: 'helpline',
    text: 'If you have any further query then you can contact our helpline',
  },
];


const PillarsOfIslam = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Pillars of Islam"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What are the Pillars of Islam?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Pillars of Islam refer to the fundamental acts of worship and belief that form the foundation of a Muslim's faith and practice. They include the declaration of faith (Shahada), ritual prayer (Salah), almsgiving (Zakat), fasting during the month of Ramadan (Sawm), and pilgrimage to Mecca (Hajj).
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    These pillars serve as the framework for a Muslim's spiritual life, guiding their actions, beliefs, and interactions with Allah (SWT) and fellow human beings.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Pillars of Islam Course?</h2>
                <div>
                  <p>The Pillars of Islam course is beneficial for Muslims of all ages and levels of knowledge, including new converts, practicing Muslims, and those seeking to deepen their understanding of Islamic principles. It is suitable for individuals interested in learning about the foundational beliefs and practices of Islam.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Pillars of Islam Course?</h2>
                <ol>
                  <li>The Pillars of Islam course provides essential knowledge about the core beliefs and practices of Islam, helping students develop a strong foundation in their faith.</li>
                  <li>Practical Guidance: Students learn how to perform the acts of worship prescribed by Islam correctly and effectively, with guidance on their significance and benefits.</li>
                  <li>Spiritual Growth: By understanding and practicing the Pillars of Islam, students can experience spiritual growth, purification of the soul, and a deeper connection with Allah (SWT).</li>
                  <li>Community Building: The course fosters a sense of community among students as they come together to learn, discuss, and implement the teachings of Islam in their lives.</li>
                  <li>Life Application: The knowledge gained from the Pillars of Islam course can be applied to various aspects of daily life, enabling students to live in accordance with Islamic principles and values.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Pillars of Islam Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> The significance and importance of each Pillar of Islam in the life of a Muslim.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> The correct method and procedure for performing Salah (ritual prayer), including its times, positions, and supplications.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> The concept of Zakat (almsgiving) and its role in purifying wealth and supporting the needy in the community.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> The significance and benefits of fasting during the month of Ramadan, including its spiritual and health-related aspects.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> The rituals and rites of Hajj (pilgrimage) to Mecca, including its historical background, obligations, and spiritual significance.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To educate students about the foundational beliefs and practices of Islam as embodied in the Pillars of Islam.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide practical guidance on how to perform the acts of worship prescribed by Islam correctly and effectively.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To foster spiritual growth, purification of the soul, and a deeper connection with Allah (SWT) among students through the practice of the Pillars of Islam.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Introduction to Pillars of Islam: Overview of the five Pillars of Islam and their significance in Muslim faith and practice.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Practical Application of Pillars: Detailed study and practical demonstration of each Pillar, including Salah, Zakat, Sawm, and Hajj.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced Understanding: Advanced study of the Pillars of Islam, exploring their spiritual dimensions, historical context, and contemporary relevance.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default PillarsOfIslam;
