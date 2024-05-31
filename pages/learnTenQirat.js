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

const LearnTenQirat = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Learn Ten Qirat"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Learn Ten Qirat Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Learn Ten Qirat course is a specialized program that focuses on mastering the ten authentic Qira'at (recitations) of the Quran. It delves into the different methods of recitation passed down through renowned reciters, providing students with a comprehensive understanding of the variations in pronunciation and Tajweed rules.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to equip students with the skills to recite the Quran according to the authentic Qira'at, enabling them to appreciate the diverse modes of recitation and deepen their connection with the Quranic text.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Learn Ten Qirat Course?</h2>
                <div>
                  <p>The Learn Ten Qirat course is suitable for students who have a strong foundation in Quranic recitation and Tajweed and are seeking to enhance their skills further. It is ideal for advanced learners, scholars, and enthusiasts who wish to explore the intricacies of the ten canonical recitations of the Quran.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Learn Ten Qirat Course?</h2>
                <ol>
                  <li>The Learn Ten Qirat course provides a unique opportunity to study and master the ten authentic modes of Quranic recitation, as transmitted through the chain of renowned reciters.</li>
                  <li>Comprehensive Understanding: Students gain a deep understanding of the variations in pronunciation, Tajweed rules, and linguistic nuances inherent in each Qira'ah.</li>
                  <li>Authentic Transmission: The course follows the traditional method of oral transmission (Tajweed) to ensure the authenticity and accuracy of recitation according to the canonical Qira'at.</li>
                  <li>Enriched Recitation: By learning the different Qira'at, students enrich their recitation skills, develop a heightened sensitivity to the rhythmic patterns of the Quran, and deepen their spiritual connection with the text.</li>
                  <li>Scholarly Pursuit: The study of the ten Qira'at is a scholarly pursuit that allows students to delve into the rich heritage of Quranic recitation and contribute to its preservation and transmission.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Learn Ten Qirat Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Introduction to the ten canonical Qira'at and their respective chains of transmission.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Detailed study of the linguistic, phonetic, and Tajweed differences between each Qira'ah.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Practice sessions focusing on reciting passages from the Quran according to each Qira'ah with precision and proficiency.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Memorization of select verses and chapters from the Quran in different Qira'at, emphasizing correct pronunciation and application of Tajweed rules.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide students with a comprehensive understanding of the ten canonical Qira'at of the Quran.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To enable students to recite passages from the Quran according to each Qira'ah with accuracy, fluency, and adherence to Tajweed rules.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To deepen students' appreciation for the diverse modes of Quranic recitation and their spiritual significance.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Introduction to Ten Qirat: Overview of the ten canonical Qira'at and their significance in Quranic recitation.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate Qira'at Study: In-depth study of select Qira'at, focusing on linguistic and Tajweed differences.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced Qira'at Mastery: Mastery of all ten Qira'at, including memorization of select passages and practical application in recitation.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default LearnTenQirat;
