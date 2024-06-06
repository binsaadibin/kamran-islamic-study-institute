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
    mainHeading: 'Learn Quran Recitation Online',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnQuranRecitationOnline = () => {
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
                <h2>Why Learn Quran Recitation Online? 7 Key Benefits</h2>
                <p>Learning to recite the Quran correctly is a vital aspect of a Muslim&apos;s faith and practice. Online Quran recitation classes offer a flexible and effective way to master the art of recitation.</p>
                <p>Our online Quran recitation classes provide access to qualified teachers, structured learning plans, and a supportive environment that can help students of all ages and levels improve their recitation skills.</p>
                <p>Here are the top reasons why learning Quran recitation online is a great choice:</p>
              </div>

              <div className={styles.metter}> 
                <h2>Importance of Learning Quran Recitation</h2>
                <h5>Correct Pronunciation</h5>
                <p>Learning Quran recitation ensures correct pronunciation (Tajweed) of the Arabic words, which is crucial for proper understanding and respect of the sacred text.</p>
                
                <h5>Spiritual Connection</h5>
                <p>Reciting the Quran correctly helps in fostering a deeper spiritual connection with Allah, enhancing the overall experience of worship and reflection.</p>
                
                <h5>Reward and Blessings</h5>
                <p>Reciting the Quran with proper Tajweed is highly rewarding in Islam, bringing numerous blessings and spiritual benefits.</p>
                
                <h5>Memorization Aid</h5>
                <p>Correct recitation aids in the memorization (Hifz) of the Quran, making it easier to recall and recite during prayers and other occasions.</p>
                
                <h5>Cultural Preservation</h5>
                <p>Learning Quran recitation helps preserve the linguistic and cultural heritage of the Islamic faith, passing it on to future generations.</p>
                
                <h5>Intellectual Growth</h5>
                <p>The process of learning and perfecting Quran recitation sharpens the mind, enhances memory, and fosters intellectual growth.</p>
                
                <h5>Community and Support</h5>
                <p>Joining online Quran recitation classes connects learners with a community of like-minded individuals, providing support and encouragement throughout their learning journey.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Choosing Our Online Quran Recitation Classes</h2>
                <h5>Experienced Teachers</h5>
                <p>Our online Quran recitation classes feature experienced and knowledgeable teachers who are dedicated to helping you achieve your learning goals.</p>
                
                <h5>Personalized Learning Plans</h5>
                <p>We offer personalized learning plans tailored to your specific needs and goals, ensuring effective and efficient learning.</p>
                
                <h5>Interactive and Engaging</h5>
                <p>Our classes are designed to be interactive and engaging, with live sessions, multimedia resources, and active participation from students.</p>
                
                <h5>Flexible Timings</h5>
                <p>With flexible class timings, you can easily fit Quran learning into your schedule, no matter how busy you are.</p>
                
                <h5>One-on-One Sessions</h5>
                <p>We offer one-on-one tutoring sessions for personalized attention and guidance, helping you progress at your own pace.</p>
                
                <h5>Comprehensive Curriculum</h5>
                <p>Our comprehensive curriculum covers all aspects of Quranic education, with a strong emphasis on proper recitation and Tajweed.</p>
                
                <h5>Community Support</h5>
                <p>Join a supportive community of learners who share your goals and values, providing encouragement and motivation throughout your learning journey.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START YOUR ONLINE QURAN RECITATION JOURNEY TODAY</h2>
                <p>Embark on your Quran recitation learning journey with our online classes. Whether you are a beginner or looking to improve your recitation skills, our program offers the resources and support you need. Take a demo class and experience the benefits firsthand.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LearnQuranRecitationOnline;
