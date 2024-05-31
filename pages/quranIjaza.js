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




const QuranIjaza = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Quran Ijaza"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Quran Ijaza Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Quran Ijaza course is a traditional method of Quranic recitation certification, wherein students receive authorization (Ijaza) from qualified scholars to transmit the Quranic text with proper pronunciation and Tajweed.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to preserve the oral transmission of the Quran and uphold the standards of Quranic recitation established by classical scholars. It involves rigorous training, assessment, and certification under the supervision of authorized Quranic teachers.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Quran Ijaza Course?</h2>
                <div>
                  <p>The Quran Ijaza course is suitable for individuals who have already memorized the Quran or have advanced proficiency in Quranic recitation. It is ideal for those seeking formal recognition of their recitation skills and authorization to transmit the Quranic text.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Quran Ijaza Course?</h2>
                <ol>
                  <li>The Quran Ijaza course provides formal recognition of one's Quranic recitation skills and authorization to transmit the Quranic text according to the classical tradition.</li>
                  <li>Authentic Certification: Our course is taught by qualified scholars who possess valid Ijazas themselves, ensuring authenticity and adherence to traditional recitation methods.</li>
                  <li>Rigorous Training: Students undergo rigorous training in Quranic recitation, Tajweed rules, and memorization under the guidance of experienced instructors.</li>
                  <li>Preservation of Tradition: By participating in the Quran Ijaza course, students contribute to the preservation of the oral transmission of the Quran and the legacy of classical Quranic scholarship.</li>
                  <li>Spiritual Fulfillment: Attaining Ijaza in Quranic recitation is a spiritually enriching experience that deepens one's connection with the Quran and the prophetic tradition.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Quran Ijaza Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Advanced Tajweed Rules: Mastery of advanced Tajweed rules and principles of Quranic recitation.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Quranic Memorization: Memorization and retention of Quranic text, including selected chapters or the entire Quran, depending on the student's proficiency level.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Recitation Practice: Extensive practice in Quranic recitation, with emphasis on proper pronunciation, rhythm, and melodious rendering.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Oral Transmission: Learning the methodology of oral transmission (Tajweed) and the etiquettes of receiving and granting Ijaza.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide formal certification (Ijaza) in Quranic recitation according to the classical tradition.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To ensure mastery of advanced Tajweed rules and principles of Quranic recitation.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To preserve the oral transmission of the Quran and uphold the standards of classical Quranic scholarship.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Basic Ijaza: Introduction to advanced Tajweed rules, Quranic memorization, and recitation practice.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Intermediate Ijaza: Mastery of advanced Tajweed rules, complete Quranic memorization, and oral transmission training.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced Ijaza: Comprehensive evaluation, assessment, and certification of Quranic recitation skills, granting full Ijaza in Quranic recitation.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default QuranIjaza;
