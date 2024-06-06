import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Learn the Holy Quran in an Easy Way',
    picture: '/imges/quran-learning.jpg',
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnQuranEasyWay = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <main className={styles.mainContent}>
            <div className={styles.MainContentArea}>
              <div>
                <AllBlogsContent content={mainContent} />
              </div>    

              <div className={styles.reason}>
                <h2>Why Learn the Holy Quran in an Easy Way?</h2>
                <p>Learning the Quran can be a transformative journey, enriching your spiritual and practical life. Understanding its teachings is essential for every Muslim, and learning it in an easy and structured way can make the process more enjoyable and effective.</p>
                <p>Our online Quran learning platform is designed to accommodate various learning styles and paces, ensuring that each student can progress comfortably and confidently. The key is consistency and dedication, and with the right resources and support, you can achieve your goals.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Benefits of Learning the Quran</h2>
                <h5>Spiritual Growth</h5>
                <p>The Quran is the ultimate source of guidance for Muslims. Engaging with its teachings regularly helps strengthen your faith and fosters a deeper connection with Allah.</p>
                <h5>Personal Development</h5>
                <p>Learning the Quran enhances your understanding of Islamic principles, which can be applied to improve various aspects of your personal and professional life.</p>
                <h5>Improved Recitation and Pronunciation</h5>
                <p>Learning the Quran correctly helps improve your Arabic pronunciation and recitation skills, making your Salah more meaningful and fulfilling.</p>
                <h5>Community and Social Status</h5>
                <p>Being knowledgeable in the Quran elevates your status within the Muslim community and allows you to contribute more effectively to communal activities and discussions.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Advantages of Online Quran Learning</h2>
                <h5>Flexible Schedule</h5>
                <p>Online learning allows you to study the Quran at times that suit your personal schedule, making it easier to balance with other commitments.</p>
                <h5>Accessible Resources</h5>
                <p>You have access to a wide range of learning materials and resources, including interactive lessons, videos, and one-on-one sessions with qualified instructors.</p>
                <h5>Personalized Learning</h5>
                <p>Our platform offers personalized learning plans tailored to your individual needs and progress, ensuring you get the most out of your learning experience.</p>
                <h5>Qualified Tutors</h5>
                <p>Learn from experienced and knowledgeable tutors who are dedicated to helping you achieve your Quran learning goals.</p>
                <h5>Global Access</h5>
                <p>Connect with tutors and fellow students from around the world, enriching your learning experience with diverse perspectives and insights.</p>
                <h5>Safe Learning Environment</h5>
                <p>Online learning provides a safe and comfortable environment for students of all ages, particularly beneficial for women and children.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START YOUR QURAN LEARNING JOURNEY TODAY</h2>
                <p>Join our Online Quran Learning Course and embark on a path to understanding and living the teachings of the Quran. We offer classes for adults, ladies, and kids. Sign up for a demo class to experience our unique approach to Quran education.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LearnQuranEasyWay;
