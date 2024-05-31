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


const IslamicSupplications = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Islamic Supplications"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Islamic Supplications Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Islamic Supplications course is designed to educate individuals about the importance, significance, and etiquette of supplications (Duas) in Islam. It explores various authentic supplications from the Quran and Sunnah, their meanings, and the occasions for their recitation.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to empower students with the knowledge and understanding to invoke Allah (SWT) in times of need, gratitude, and worship, fostering a deeper spiritual connection and reliance on Him.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Islamic Supplications Course?</h2>
                <div>
                  <p>The Islamic Supplications course is beneficial for Muslims of all ages and backgrounds who seek to enrich their spiritual practices and deepen their connection with Allah (SWT). It is suitable for beginners as well as those already familiar with supplications, as it covers a wide range of topics and Duas.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Islamic Supplications Course?</h2>
                <ol>
                  <li>The Islamic Supplications course provides essential knowledge about Duas, their meanings, and their significance in Islam, enabling students to incorporate supplications into their daily lives.</li>
                  <li>Authentic Sources: The course draws from authentic sources, including the Quran and Hadith, to ensure the validity and reliability of the supplications taught.</li>
                  <li>Practical Guidance: Students receive practical guidance on when, how, and why to recite specific Duas, as well as the etiquettes and conditions for their acceptance.</li>
                  <li>Spiritual Growth: By learning and practicing Islamic supplications, students can experience spiritual growth, inner peace, and a deeper sense of connection with Allah (SWT).</li>
                  <li>Community Building: The course fosters a sense of community among students as they come together to learn, share, and supplicate for themselves and others.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Islamic Supplications Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> The significance and virtues of supplications in Islam.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Authentic Duas from the Quran and Sunnah for various occasions and situations.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Etiquettes and conditions for the acceptance of supplications.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Methods to increase the effectiveness of Duas and overcome obstacles in their acceptance.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To educate students about the significance, virtues, and etiquettes of Islamic supplications.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To empower students with the knowledge and understanding to invoke Allah (SWT) in times of need, gratitude, and worship through authentic Duas.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To foster a deeper spiritual connection and reliance on Allah (SWT) among students through the practice of supplications.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Introduction to Islamic Supplications: Overview of the significance and virtues of supplications in Islam.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate Supplications Study: In-depth exploration of authentic Duas and their applications in different situations.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced Supplications Mastery: Mastery of advanced Duas, methods to increase the effectiveness of supplications, and practical application in daily life.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default IslamicSupplications;
