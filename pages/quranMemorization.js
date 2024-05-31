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


const QuranMemorization = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Quran Memorization"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Quran Memorization Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Quran Memorization course is designed to help individuals memorize the Quranic text with accuracy and fluency. It provides a structured approach to memorization, incorporating techniques, strategies, and resources to facilitate the memorization process.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to develop student&apos;s memorization skills, enhance their understanding of the Quranic verses, and cultivate a deep spiritual connection with the Quran through regular recitation and revision.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Quran Memorization Course?</h2>
                <div>
                  <p>The Quran Memorization course is suitable for individuals of all ages who aspire to memorize the Quranic text. Whether you&apos;re a beginner or an advanced learner, this course offers personalized guidance and support to help you achieve your memorization goals.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Quran Memorization Course?</h2>
                <ol>
                  <li>The Quran Memorization course provides a systematic approach to memorizing the Quranic text, guiding students through the memorization process step by step.</li>
                  <li>Effective Techniques: Our course incorporates proven memorization techniques, such as repetition, visualization, and association, to enhance retention and recall of Quranic verses.</li>
                  <li>Structured Curriculum: The course follows a structured curriculum, dividing the Quran into manageable sections and providing resources for memorization, recitation, and revision.</li>
                  <li>Supportive Environment: Our instructors provide personalized guidance, feedback, and encouragement to motivate students and keep them on track with their memorization goals.</li>
                  <li>Spiritual Benefits: Memorizing the Quran not only strengthens one&apos;s memory but also deepens their spiritual connection with the Quran and strengthens their faith.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Quran Memorization Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Memorization Techniques: Introduction to effective memorization techniques, including repetition, visualization, and association.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Quranic Sections: Dividing the Quran into manageable sections and developing a memorization plan based on individual learning goals and abilities.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Recitation and Revision: Practicing recitation and revision of memorized verses to reinforce learning and ensure retention.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Spiritual Reflection: Reflecting on the meanings and teachings of the memorized verses to deepen one&apos;s understanding and connection with the Quran.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To help students memorize the Quranic text with accuracy, fluency, and understanding.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide students with effective memorization techniques and strategies to enhance their learning experience.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To foster a deep spiritual connection with the Quran and strengthen one&apos;s faith through regular recitation and reflection.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Beginner: Introduction to memorization techniques, basic Quranic sections, and foundational memorization exercises.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate: Advanced memorization exercises, comprehensive recitation and revision, and thematic memorization studies.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced: Mastery of Quranic memorization, specialized memorization projects, and application-oriented memorization activities.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default QuranMemorization;
