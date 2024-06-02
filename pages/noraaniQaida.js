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


const NooraniQaida = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar sidebarContent={sidebarContent} />
          </div>
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Noorani Qaida"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Noorani Qaida?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    Noorani Qaida is a fundamental book in learning to read the Quran. It serves as a stepping stone for beginners, teaching them the Arabic alphabet, pronunciation, and basic rules of Tajweed in a systematic manner.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course focuses on providing students with a solid foundation in Quranic recitation by introducing them to the principles of Tajweed, including proper pronunciation, articulation, and characteristics of letters.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Noorani Qaida?</h2>
                <div>
                  <p>Noorani Qaida is beneficial for beginners of all ages who wish to learn to read the Quran. Whether you have no prior knowledge of Arabic or Tajweed, this course is designed to gradually introduce you to the fundamentals of Quranic recitation.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Noorani Qaida Course?</h2>
                <ol>
                  <li>The Noorani Qaida course provides a structured approach to learning the Quranic script and pronunciation, ensuring a clear understanding of the basics before progressing to more advanced texts.</li>
                  <li>Interactive Learning: Our course incorporates interactive exercises, audiovisual aids, and repetitive drills to reinforce learning and help students grasp the concepts effectively.</li>
                  <li>Foundation for Tajweed: By mastering the principles taught in Noorani Qaida, students develop a strong foundation in Tajweed, enabling them to recite the Quran accurately and fluently.</li>
                  <li>Progressive Curriculum: The course follows a progressive curriculum, gradually introducing new concepts and building upon previously learned skills to ensure steady progress.</li>
                  <li>Self-Paced Learning: With flexible lesson plans and self-paced learning modules, students can study at their own convenience and track their progress as they advance through the course.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Noorani Qaida Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Arabic Alphabet & their Proper Pronunciation.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Letter Recognition and Formation.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Joining Letters to Form Words.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Introduction to Short Vowels (Harakat).</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Practice with Long Vowels (Huroof Maddah).</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Understanding Sukoon and Tanween.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Basic Rules of Tajweed.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide a structured approach to learning Quranic recitation for beginners.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Develop a clear understanding of Arabic letters, pronunciation, and Tajweed rules.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Lay a strong foundation for students to progress to more advanced Quranic studies.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Basics: Introduction to Arabic alphabet, pronunciation, and basic Tajweed rules.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate: Further practice on Tajweed rules, focusing on fluency and accuracy in recitation.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced: Mastery of Tajweed principles, with emphasis on application in Quranic recitation.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default NooraniQaida;

