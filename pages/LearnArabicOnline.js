import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import BlogContent from '@/components/BlogContent';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'LANGUAGE EDUCATION',
    mainHeading: 'Why Learn Arabic Language Online',
    picture: '/imges/arabic-language.jpg',  // Update the image path accordingly
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnArabicOnline = () => {
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
                <h2>Why Learn Arabic Language Online? 7 Key Benefits</h2>
                <p>Learning Arabic, the language of the Quran and a widely spoken language across the Middle East and North Africa, can open numerous doors of opportunity and understanding.</p>
                <p>Whether for religious, cultural, or professional reasons, learning Arabic online offers flexibility and access to high-quality resources that can make the learning process effective and enjoyable.</p>
                <p>Here are the top reasons why learning Arabic online is a great choice:</p>
              </div>

              <div className={styles.metter}> 
                <h2>Importance of Learning Arabic</h2>
                <h5>Understanding the Quran</h5>
                <p>For Muslims, learning Arabic is crucial for understanding the Quran in its original language, which deepens the connection and comprehension of its teachings.</p>
                
                <h5>Career Opportunities</h5>
                <p>Arabic is a valuable language in many career fields, including international business, diplomacy, intelligence, and education. Proficiency in Arabic can open up numerous job opportunities.</p>
                
                <h5>Cultural Insight</h5>
                <p>Learning Arabic provides a deeper understanding of Arab culture, history, and literature, fostering greater appreciation and cultural awareness.</p>
                
                <h5>Intellectual Challenge</h5>
                <p>Arabic is known for its rich vocabulary and complex grammar. Learning it can be intellectually stimulating and rewarding, enhancing cognitive abilities and problem-solving skills.</p>
                
                <h5>Communication</h5>
                <p>Arabic is spoken by over 300 million people worldwide. Learning Arabic allows you to communicate with native speakers and engage more deeply with Arabic-speaking communities.</p>
                
                <h5>Personal Growth</h5>
                <p>Learning a new language is a journey of personal growth. It fosters patience, perseverance, and a sense of achievement that comes with mastering a new skill.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Advantages of Learning Arabic Online</h2>
                <h5>Flexibility and Convenience</h5>
                <p>Online Arabic classes offer the flexibility to learn at your own pace and on your own schedule. This is particularly beneficial for those with busy lifestyles.</p>
                
                <h5>Access to Quality Resources</h5>
                <p>Online learning provides access to a wide range of high-quality resources, including interactive lessons, multimedia content, and native-speaking tutors.</p>
                
                <h5>Interactive Learning Environment</h5>
                <p>Many online Arabic courses offer interactive platforms where students can engage in live conversations, group discussions, and one-on-one tutoring sessions.</p>
                
                <h5>Cost-Effective</h5>
                <p>Online Arabic courses are often more affordable than traditional in-person classes. Additionally, you save on commuting costs and time.</p>
                
                <h5>Personalized Learning</h5>
                <p>With online learning, you can tailor your study plan to suit your learning style, goals, and pace, ensuring a more personalized and effective learning experience.</p>
                
                <h5>Global Accessibility</h5>
                <p>Online learning removes geographical barriers, allowing you to learn Arabic from qualified instructors and native speakers from around the world.</p>
                
                <h5>Continuous Progress Tracking</h5>
                <p>Many online platforms offer tools for tracking your progress, helping you stay motivated and focused on your learning goals.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START YOUR ARABIC LEARNING JOURNEY TODAY</h2>
                <p>Embark on the journey of learning Arabic online with our comprehensive and engaging courses. Whether you are a beginner or looking to advance your skills, our online program offers the resources and support you need. Take a demo class and experience the benefits firsthand.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LearnArabicOnline;
