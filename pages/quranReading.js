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



const QuranReading = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Quran Reading"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Quran Reading Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Quran Reading course is designed to help individuals of all levels learn to read the Quran with proper pronunciation and Tajweed. It focuses on developing fluency in Quranic recitation while understanding the meanings and teachings of the Quranic verses.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course provides a comprehensive approach to Quranic reading, incorporating Tajweed rules, memorization techniques, and comprehension exercises to enhance the student&apos;s ability to recite and understand the Quranic text.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Quran Reading Course?</h2>
                <div>
                  <p>The Quran Reading course is suitable for individuals of all ages and backgrounds who wish to improve their Quranic reading skills. Whether you&apos;re a beginner or an advanced learner, this course offers personalized instruction to meet your learning needs.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Quran Reading Course?</h2>
                <ol>
                  <li>The Quran Reading course provides a structured approach to learning Quranic recitation, focusing on both fluency and accuracy in pronunciation.</li>
                  <li>Comprehensive Curriculum: Our course covers a wide range of topics, including Arabic script, Tajweed rules, memorization techniques, and understanding Quranic verses.</li>
                  <li>Qualified Instructors: Our instructors are experienced Quranic scholars who provide personalized guidance and support to help students achieve their learning goals.</li>
                  <li>Interactive Learning: The course includes interactive lessons, audiovisual aids, and practice exercises to engage students and reinforce learning.</li>
                  <li>Flexible Learning Options: With flexible scheduling and online learning platforms, students can study at their own pace and convenience.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Quran Reading Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Arabic Alphabet & their Proper Pronunciation.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Introduction to Tajweed Rules.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Proper Articulation and Characteristics of Letters.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Memorization Techniques for Quranic Verses.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Understanding and Interpreting Quranic Texts.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Practicing Recitation with Fluency and Melody.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To help students develop fluency and accuracy in Quranic recitation.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To instill a deep understanding and appreciation of the teachings of the Quran.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To equip students with the necessary skills to continue their Quranic studies independently.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Beginner: Introduction to Arabic script, pronunciation, and basic Tajweed rules.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate: Advanced study of Tajweed rules, focusing on fluency and comprehension.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced: Mastery of Quranic recitation, with emphasis on memorization and interpretation.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default QuranReading;
