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

const ArabicLanguage = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Arabic Language"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Arabic Language Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Arabic Language course is designed to teach students the fundamentals of the Arabic language, including grammar, vocabulary, syntax, and pronunciation. It provides a comprehensive foundation for learning and understanding both classical and modern Arabic texts.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to develop students' reading, writing, listening, and speaking skills in Arabic, enabling them to communicate effectively and engage with Arabic literature, media, and culture.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Arabic Language Course?</h2>
                <div>
                  <p>The Arabic Language course is suitable for learners of all levels, from beginners with no prior knowledge of Arabic to intermediate and advanced students seeking to enhance their proficiency. It is ideal for anyone interested in Arabic language and culture, including students, professionals, and enthusiasts.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Arabic Language Course?</h2>
                <ol>
                  <li>The Arabic Language course provides a structured approach to learning Arabic, guiding students from basic to advanced levels of proficiency in reading, writing, listening, and speaking.</li>
                  <li>Comprehensive Curriculum: Our course covers all aspects of the Arabic language, including grammar, vocabulary, syntax, and pronunciation, to ensure a well-rounded understanding.</li>
                  <li>Interactive Learning: The course includes interactive lessons, exercises, and activities to engage students and reinforce learning through practice and application.</li>
                  <li>Cultural Immersion: In addition to language skills, the course offers insights into Arabic culture, history, and traditions, providing a holistic learning experience.</li>
                  <li>Practical Application: Students learn practical language skills that can be applied in real-life situations, such as travel, work, and social interactions in Arabic-speaking environments.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Arabic Language Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Arabic Alphabet: Introduction to the Arabic alphabet, including letter forms, sounds, and pronunciation.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Basic Grammar: Fundamentals of Arabic grammar, such as verb conjugation, noun cases, sentence structure, and word order.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Vocabulary Building: Building a foundational vocabulary of common Arabic words and phrases for everyday communication.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Reading and Writing: Developing reading and writing skills through practice with Arabic texts, scripts, and handwriting.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Listening and Speaking: Improving listening comprehension and speaking fluency through audiovisual materials, dialogues, and conversation practice.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To equip students with the necessary language skills to communicate effectively in Arabic.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide a solid foundation in Arabic grammar, vocabulary, reading, writing, listening, and speaking.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To foster an appreciation for Arabic language, literature, and culture.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Beginner: Introduction to Arabic alphabet, basic vocabulary, and simple grammar concepts.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate: Intermediate grammar, expanded vocabulary, reading comprehension, and conversation practice.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced: Advanced grammar, fluency in reading and writing, advanced conversation skills, and cultural studies.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default ArabicLanguage;
