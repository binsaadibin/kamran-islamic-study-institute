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
    mainHeading: 'Learn to Read Quran Online',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnToReadQuranOnline = () => {
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
                <h2>Why Learn to Read the Quran Online?</h2>
                <p>Learning to read the Quran is a vital aspect of a Muslim&apos;s spiritual journey. With the advent of technology, it has become easier to access quality Quran education from the comfort of your home. Here are some key reasons to consider learning to read the Quran online:</p>
                
                <h5>Flexible Scheduling</h5>
                <p>Online Quran classes offer flexibility in scheduling, allowing you to learn at your own pace and at times that fit your busy lifestyle. This is especially beneficial for those with work, school, or family commitments.</p>
                
                <h5>Access to Qualified Tutors</h5>
                <p>Online platforms provide access to highly qualified and experienced Quran tutors from around the world. You can choose a tutor who best fits your learning style and needs, ensuring a personalized and effective learning experience.</p>
                
                <h5>Interactive Learning Environment</h5>
                <p>Online Quran classes utilize interactive tools and resources, such as video conferencing, digital whiteboards, and multimedia content, to enhance the learning experience. These tools make the lessons engaging and interactive, helping you to stay motivated and focused.</p>
                
                <h5>Convenience and Comfort</h5>
                <p>Learning to read the Quran online allows you to study from the comfort of your home. You can create a dedicated learning space that is free from distractions and conducive to focused study. This convenience can lead to better retention and understanding of the material.</p>

                <h5>Cost-Effective</h5>
                <p>Online Quran classes are often more affordable than traditional in-person classes. You can save on transportation costs and other expenses associated with attending physical classes. Additionally, many online platforms offer flexible payment plans to accommodate different budgets.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Benefits of Learning to Read the Quran</h2>
                <h5>Spiritual Connection</h5>
                <p>Reading the Quran allows you to connect with the divine words of Allah, deepening your spiritual connection and understanding of Islam. It provides guidance, comfort, and inspiration in your daily life.</p>
                
                <h5>Improved Recitation Skills</h5>
                <p>Learning to read the Quran with proper pronunciation and intonation improves your recitation skills. This is important for performing Salah (prayer) correctly and for participating in communal Quranic recitations.</p>
                
                <h5>Enhanced Understanding of Arabic</h5>
                <p>Reading the Quran helps you to improve your understanding of the Arabic language. This can enhance your ability to comprehend the meanings of the Quranic verses and appreciate the beauty of the language.</p>
                
                <h5>Fulfillment of Religious Obligation</h5>
                <p>Reading the Quran is a fundamental religious obligation for Muslims. By learning to read the Quran, you fulfill this important aspect of your faith and demonstrate your commitment to following the teachings of Islam.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Choosing the Right Online Quran Course</h2>
                <h5>Identify Your Learning Goals</h5>
                <p>Before enrolling in an online Quran course, it is important to identify your learning goals. Are you a beginner looking to learn the basics of Quranic reading, or are you seeking to improve your recitation and Tajweed (rules of Quranic pronunciation)? Understanding your goals will help you choose the right course.</p>
                
                <h5>Research Course Options</h5>
                <p>Research different online Quran courses and compare their offerings. Look for courses that provide structured lessons, qualified tutors, and interactive learning tools. Read reviews and testimonials from other students to gauge the quality of the course.</p>
                
                <h5>Consider Tutor Qualifications</h5>
                <p>The qualifications and experience of the tutor are crucial for effective learning. Look for tutors who are certified in Quranic studies and have experience teaching online. A good tutor should be patient, knowledgeable, and able to adapt their teaching style to your needs.</p>
                
                <h5>Check for Trial Lessons</h5>
                <p>Many online Quran courses offer trial lessons or free demos. Take advantage of these opportunities to evaluate the course and tutor before committing. This will give you a better idea of what to expect and whether the course meets your expectations.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START YOUR QURANIC JOURNEY TODAY</h2>
                <p>Embark on your journey to learn to read the Quran online. With the right resources, guidance, and commitment, you can achieve proficiency in Quranic reading and deepen your understanding of the divine words of Allah. Enroll in an online Quran course today and take the first step towards a more fulfilling and spiritually enriching life.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LearnToReadQuranOnline;
