import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import BlogContent from '@/components/BlogContent';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Quran Reading Classes for Kids and Adults',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const QuranReadingClasses = () => {
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
                <h2>Why Enroll in Quran Reading Classes for Kids and Adults?</h2>
                <p>Learning to read the Quran correctly is essential for every Muslim. Our Quran Reading Classes for Kids and Adults provide a comprehensive and flexible way to achieve this goal.</p>
                <p>Our classes cater to all age groups, ensuring that both kids and adults can learn to read the Quran with proper Tajweed, enhancing their understanding and connection with the holy text.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Importance of Quran Reading</h2>
                <h5>Foundation of Faith</h5>
                <p>Reading the Quran is fundamental to a Muslim&apos;s faith and practice. It serves as a guide and a source of wisdom and comfort.</p>
                
                <h5>Proper Pronunciation (Tajweed)</h5>
                <p>Our classes emphasize the correct pronunciation of Arabic letters and words, ensuring that students recite the Quran accurately.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Reading the Quran regularly helps in spiritual growth, bringing peace and tranquility to the heart and mind.</p>
                
                <h5>Educational Benefits</h5>
                <p>Learning to read the Quran enhances cognitive abilities, improves memory, and fosters discipline and focus.</p>
                
                <h5>Cultural and Religious Understanding</h5>
                <p>Understanding the Quran&apos;s teachings helps in appreciating and preserving Islamic culture and values.</p>
                
                <h5>Community and Social Connection</h5>
                <p>Joining Quran reading classes connects individuals with a community of learners, fostering a sense of belonging and shared purpose.</p>
                
                <h5>Personal Achievement</h5>
                <p>Successfully learning to read the Quran is a significant personal achievement, bringing a sense of accomplishment and fulfillment.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Advantages of Our Quran Reading Classes</h2>
                <h5>Experienced Instructors</h5>
                <p>Our instructors are highly qualified and experienced in teaching Quran reading to students of all ages and levels.</p>
                
                <h5>Customized Learning Plans</h5>
                <p>We offer personalized learning plans tailored to each student&apos;s pace and learning style, ensuring effective progress.</p>
                
                <h5>Interactive and Engaging</h5>
                <p>Our classes are designed to be interactive and engaging, with live sessions, multimedia resources, and active participation from students.</p>
                
                <h5>Flexible Schedule</h5>
                <p>With flexible class timings, students can easily fit Quran reading into their busy schedules.</p>
                
                <h5>One-on-One Tutoring</h5>
                <p>We offer one-on-one tutoring sessions for personalized attention and guidance, helping students achieve their learning goals.</p>
                
                <h5>Comprehensive Curriculum</h5>
                <p>Our comprehensive curriculum covers all aspects of Quran reading, with a strong emphasis on Tajweed and proper pronunciation.</p>
                
                <h5>Supportive Community</h5>
                <p>Join a supportive community of learners who share your goals and values, providing encouragement and motivation throughout your learning journey.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>BEGIN YOUR QURAN READING JOURNEY TODAY</h2>
                <p>Start your journey to learn Quran reading with our online classes. Whether you are a beginner or looking to improve your reading skills, our program offers the resources and support you need. Take a demo class and experience the benefits firsthand.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default QuranReadingClasses;
