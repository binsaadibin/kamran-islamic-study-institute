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


const JuniorLevelCourse = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
        <Sidebar sidebarContent={sidebarContent} />
          <main className={styles.mainContent}>
            <div className={styles.CourseseHeading}>
              <CourseseHeading text="Junior Level Course"/>
            </div>
            <div className={styles.MainContentArea}>

              <div className={styles.courseIntro}>
                <h2>01. What is Junior Level Course?</h2>
                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    The Junior Level Course is designed for young learners to introduce them to the fundamental concepts, teachings, and practices of Islam in an engaging and age-appropriate manner. It covers various aspects of Islamic faith, including beliefs, morals, worship, and character development.
                  </p>
                </div>

                <div className={styles.list}>
                  <span>
                    <Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
                  </span>
                  <p>
                    This course aims to instill a love for Islam, a sense of identity as Muslims, and a basic understanding of Islamic values and principles among young students, laying a strong foundation for their spiritual and moral development.
                  </p>
                </div>
              </div>

              <div className={styles.users}>
                <h2>02. Who can benefit from Junior Level Course?</h2>
                <div>
                  <p>The Junior Level Course is suitable for children and young learners between the ages of 6 to 12 years old who are keen to learn about Islam in a structured and interactive manner. It is ideal for parents, educators, and Islamic schools seeking to provide foundational Islamic education to children.</p>
                </div>
              </div>

              <div className={styles.reason}>
                <h2>03. Why Junior Level Course?</h2>
                <ol>
                  <li>The Junior Level Course offers a comprehensive introduction to Islam tailored to the cognitive and emotional development of young learners, fostering their curiosity, creativity, and critical thinking skills.</li>
                  <li>Engaging Curriculum: The course features interactive lessons, stories, games, and activities designed to capture children's interest and make learning enjoyable and memorable.</li>
                  <li>Moral and Spiritual Development: Through age-appropriate teachings and examples, the course aims to nurture children's moral character, empathy, compassion, and sense of responsibility as Muslims.</li>
                  <li>Family and Community Involvement: The course encourages family and community involvement, providing opportunities for parents, teachers, and peers to support children's learning and growth together.</li>
                </ol>
              </div>

              <div className={styles.detail}>  
                <h2>04. What will you Learn in Junior Level Course?</h2>
                <ul>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Basic beliefs and articles of faith in Islam, including the Oneness of Allah (Tawheed), Prophethood, and the Hereafter.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Stories of Prophets and Messengers from Islamic history, highlighting their virtues, teachings, and relevance to children's lives.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Introduction to Islamic rituals and practices, such as Salah (prayer), fasting, charity, and acts of kindness and gratitude.</li>
                  <li><span><Image width={50} height={50} src="/imges/next.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> Moral values and character development based on Islamic teachings, including honesty, kindness, generosity, and respect for others.</li>
                </ul>
              </div>

              <div className={styles.objectives}>
                <h2>05. Objectives of the Course</h2>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To introduce young learners to the basic beliefs, teachings, and practices of Islam in an engaging and age-appropriate manner.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To nurture a love for Islam, a sense of identity as Muslims, and a moral and spiritual foundation for children's development.</p>
                <p><span><Image width={50} height={50} src="/imges/527-5271894_transparent-clipart-check-mark-transparent-background-golden-check.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> To provide interactive and enjoyable learning experiences that inspire curiosity, creativity, and critical thinking among young learners.</p>
              </div>

              <div className={styles.levels}>
                <h2>06. Levels of the Course</h2>
                <div>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-1:</span> Introduction to Islam: Basic beliefs, practices, and stories from Islamic history presented in an interactive and engaging format.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-2:</span> Exploring Islamic Values: Delving deeper into Islamic morals, virtues, and rituals through stories, activities, and discussions.</p>
                  <p><span><Image width={50} height={50} src="/imges/like.png" alt="Placeholder Image" className={`img-fluid ${styles.image}`} /></span> <span/><span>Level-3:</span> Living as a Muslim: Applying Islamic teachings to daily life, fostering a sense of responsibility, compassion, and gratitude in young learners.</p>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default JuniorLevelCourse;
