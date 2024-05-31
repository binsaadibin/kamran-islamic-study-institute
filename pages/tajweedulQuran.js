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

const TajweedUlQuran = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
        <main className={styles.mainContent}>
          <div className={styles.CourseseHeading}>
            <CourseseHeading text="Tajweed ul Quran" />
          </div>
          <div className={styles.MainContentArea}>
            <div className={styles.courseIntro}>
              <h2>01. What is Tajweed ul Quran?</h2>
              <div className={styles.list}>
                <span>
                  <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                </span>
                <p>
                  Tajweed ul Quran is the science of reciting the Quran correctly, observing proper pronunciation, articulation, and rhythm. It involves applying rules and techniques to ensure the accurate recitation of the Quranic text.
                </p>
              </div>
              <div className={styles.list}>
                <span>
                  <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                </span>
                <p>
                  This course focuses on teaching students the rules of Tajweed, including proper pronunciation of Arabic letters, correct elongation, pauses, and characteristics of letters, to enhance their recitation of the Quran.
                </p>
              </div>
            </div>
            <div className={styles.users}>
              <h2>02. Who can benefit from Tajweed ul Quran?</h2>
              <div>
                <p>Tajweed ul Quran is beneficial for anyone who wants to improve their Quranic recitation skills. Whether you&apos;re a beginner or an experienced reciter, this course provides valuable insights and techniques to enhance your recitation and deepen your understanding of the Quran.</p>
              </div>
            </div>
            <div className={styles.reason}>
              <h2>03. Why Tajweed ul Quran Course?</h2>
              <ol>
                <li>The Tajweed ul Quran teaching course is designed to impart these essential skills and lay a solid foundation for individuals aspiring to recite the Quran fluently and accurately.</li>
                <li>Learning Enhancers: Our course employs unique teaching methods such as 3D pictures, audio and video aids, practical activities, and games to reinforce the rules of Tajweed and make learning engaging and effective.</li>
                <li>Certificate: Upon successful completion of the course, students receive an e-certificate signed by supervisors and course instructors, validating their proficiency in Tajweed and Quranic recitation.</li>
                <li>Variety of Resources: Our course offers a variety of Qaidas, including Noorani Qaida in English, Noorani Qaida in Urdu, and Rehmani Qaida, catering to diverse learning preferences and backgrounds.</li>
                <li>Duration of the Course: The course duration varies depending on the student&apos;s level and abilities, typically taking two to three months to complete. With 16 lessons and 31 pages, students progress at their own pace, ensuring thorough understanding and mastery of Tajweed principles.</li>
              </ol>
            </div>
            <div className={styles.detail}>
              <h2>04. What will you Learn in Tajweed ul Quran Course?</h2>
              <ul>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Arabic Alphabet & their Proper Pronunciation Letter Recognition.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Letter Positions.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Connecting Letters.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Short Vowels (Harakat).</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Long Vowels (Huroof Maddah).</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Sukoon.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Tanween.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Rules of Noon Sakinah & Tanween.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Rules of Raa.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Rules of Laam.</li>
                <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Noon Qutni.</li>
              </ul>
            </div>
            <div className={styles.objectives}>
              <h2>05. Objectives of the Course</h2>
              <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To facilitate the learning and recitation of the Holy Quran, whether for children or adults.</p>
              <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Teach the correct pronunciation of Arabic letters and words.</p>
              <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Develop the student’s ability to recite the Quran with proper Tajweed, applying rules and techniques to ensure accurate recitation.</p>
            </div>
            <div className={styles.levels}>
              <h2>06. Levels of the Course</h2>
              <div>
                <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span /><span>Level-1:</span> Basics: Introduction to Tajweed principles, focusing on Arabic alphabet, pronunciation, and basic rules.</p>
                <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span /><span>Level-2:</span> Intermediate: Advanced study of Tajweed rules, including elongation, pauses, and characteristics of letters.</p>
                <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span /><span>Level-3:</span> Advanced: Mastery of Tajweed principles, with emphasis on proper recitation techniques and common mistakes correction.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default TajweedUlQuran;
