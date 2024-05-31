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


const LearnTafseerQuran = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Learn Tafseer Quran"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Learn Tafseer Quran Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Learn Tafseer Quran course is designed to help individuals understand the deeper meanings and interpretations of the Quranic verses. It delves into the historical context, linguistic nuances, and thematic analysis of the Quran to provide a comprehensive understanding of its message.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to equip students with the tools and methodologies needed to interpret and apply the teachings of the Quran in their daily lives. It covers various Tafseer methods and resources to facilitate a deeper engagement with the Quranic text.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Learn Tafseer Quran Course?</h2>
                <div>
                  <p>The Learn Tafseer Quran course is suitable for individuals who have a basic understanding of Arabic and Quranic studies. Whether you're a student of Islamic sciences, a scholar, or a curious learner, this course offers valuable insights into the interpretation of the Quran.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Learn Tafseer Quran Course?</h2>
                <ol>
                  <li>The Learn Tafseer Quran course provides a structured approach to studying the deeper meanings of the Quranic verses, guiding students through various Tafseer methodologies and interpretations.</li>
                  <li>Comprehensive Study: Our course covers a wide range of topics, including historical context, linguistic analysis, thematic interpretation, and contemporary relevance of the Quranic text.</li>
                  <li>Qualified Instructors: Our instructors are experienced scholars with expertise in Quranic exegesis, providing authentic and insightful commentary on the Quranic verses.</li>
                  <li>Interactive Learning: The course includes interactive lectures, discussions, and assignments to engage students and encourage critical thinking about the Quranic text.</li>
                  <li>Application-Oriented: The Learn Tafseer Quran course emphasizes the practical application of Quranic teachings in personal, social, and spiritual contexts, empowering students to derive guidance from the Quran in their daily lives.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Learn Tafseer Quran Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Methods of Tafseer: Introduction to different approaches and methodologies used in interpreting the Quranic text.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Historical Context: Understanding the socio-political, cultural, and religious context of the Quranic revelation.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Linguistic Analysis: Exploring the Arabic language and its significance in interpreting Quranic verses.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Thematic Interpretation: Identifying recurring themes and motifs in the Quran and their implications for contemporary relevance.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Application of Tafseer: Applying Tafseer principles to derive practical guidance from the Quran for personal development and social change.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To deepen students' understanding of the Quranic text through critical analysis and interpretation.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To equip students with the skills and methodologies needed to engage in independent Tafseer studies.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To foster a deeper spiritual connection with the Quran and its teachings.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Introduction to Tafseer: Basic concepts, methodologies, and introductory Tafseer studies.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate Tafseer: In-depth analysis of selected Quranic passages, thematic studies, and linguistic analysis.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced Tafseer: Advanced topics in Quranic exegesis, specialized studies, and contemporary applications of Tafseer principles.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default LearnTafseerQuran;
