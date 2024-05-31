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




const SeniorLevelCourse = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Senior Level Course"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Senior Level Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Senior Level Course is designed for older students and adults who have a basic understanding of Islam and seek to deepen their knowledge and practice of the faith. It covers advanced topics in Islamic theology, jurisprudence, spirituality, and ethics, providing a comprehensive understanding of Islam&apos;s teachings and principles.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to equip students with the tools and insights necessary to navigate complex theological and ethical issues, engage critically with Islamic texts and traditions, and apply Islamic teachings to contemporary challenges and contexts.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Senior Level Course?</h2>
                <div>
                  <p>The Senior Level Course is suitable for older students, professionals, educators, and community leaders who wish to deepen their understanding of Islam and its relevance to contemporary life. It is ideal for individuals seeking advanced theological and jurisprudential knowledge, as well as those interested in spiritual growth and ethical development.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Senior Level Course?</h2>
                <ol>
                  <li>The Senior Level Course offers a comprehensive and in-depth exploration of advanced topics in Islamic theology, law, spirituality, and ethics, providing students with a nuanced understanding of Islam&apos;s teachings and principles.</li>
                  <li>Intellectual Engagement: The course encourages critical thinking, intellectual inquiry, and scholarly engagement with Islamic texts, traditions, and contemporary issues.</li>
                  <li>Spiritual Growth: Through advanced studies in Islamic spirituality and ethics, the course aims to foster spiritual growth, moral development, and a deeper connection with Allah (SWT) among students.</li>
                  <li>Practical Application: The knowledge gained from the Senior Level Course can be applied to addressing contemporary challenges, promoting social justice, and contributing positively to society.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Senior Level Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Advanced studies in Islamic theology (Aqeedah), including discussions on theological debates, schools of thought, and contemporary theological issues.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> In-depth exploration of Islamic jurisprudence (Fiqh) and legal reasoning (Usul al-Fiqh), covering topics such as worship, transactions, family law, and bioethics.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Advanced studies in Islamic spirituality (Tasawwuf) and ethics (Akhlaq), including the purification of the soul, spiritual practices, and ethical principles derived from Islamic teachings.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Critical engagement with contemporary Islamic thought and issues, such as gender equality, human rights, interfaith dialogue, and Islamic finance.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide advanced theological, jurisprudential, spiritual, and ethical education to students seeking deeper knowledge and understanding of Islam.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To foster critical thinking, intellectual engagement, and scholarly inquiry into Islamic texts, traditions, and contemporary issues.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To promote spiritual growth, moral development, and ethical awareness among students, guiding them to live in accordance with Islamic teachings and values.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Advanced Studies in Islamic Theology: In-depth exploration of theological debates, concepts, and schools of thought in Islam.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Advanced Studies in Islamic Jurisprudence: Comprehensive study of Islamic law, legal reasoning, and contemporary jurisprudential issues.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Advanced Studies in Islamic Spirituality and Ethics: Exploration of Islamic spirituality, ethics, and moral philosophy, with a focus on personal development and social responsibility.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default SeniorLevelCourse;
