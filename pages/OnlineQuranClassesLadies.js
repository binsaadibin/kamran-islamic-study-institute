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
    mainHeading: 'Online Quran Classes for Ladies',
    picture: '/imges/quran-classes-ladies.jpg',  // Update the image path accordingly
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const OnlineQuranClassesLadies = () => {
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
                <h2>Why Take Online Quran Classes for Ladies? 7 Key Benefits</h2>
                <p>For many Muslim women, learning the Quran is a deeply personal and important journey. Online Quran classes provide an accessible, flexible, and comfortable way for women to study the Quran.</p>
                <p>Our online Quran classes for ladies offer a supportive environment where women can learn at their own pace and connect with knowledgeable female instructors who understand their needs and concerns.</p>
                <p>Here are the top reasons why taking online Quran classes for ladies is a great choice:</p>
              </div>

              <div className={styles.metter}> 
                <h2>Importance of Online Quran Classes for Ladies</h2>
                <h5>Comfort and Convenience</h5>
                <p>Online Quran classes allow ladies to learn from the comfort of their homes, providing a safe and private learning environment.</p>
                
                <h5>Flexible Scheduling</h5>
                <p>With online classes, ladies can choose class times that fit their busy schedules, making it easier to balance Quran study with other responsibilities.</p>
                
                <h5>Qualified Female Instructors</h5>
                <p>Many online programs offer access to experienced female instructors who can provide personalized attention and guidance.</p>
                
                <h5>Structured Learning</h5>
                <p>Online Quran classes follow a structured curriculum that covers all aspects of Quranic education, from basic recitation to advanced Tafseer and Tajweed.</p>
                
                <h5>Interactive Learning</h5>
                <p>Interactive learning environments, including live sessions and discussions, make the learning process engaging and effective.</p>
                
                <h5>Community and Support</h5>
                <p>Joining online Quran classes connects ladies with a community of like-minded learners, providing support and motivation throughout their learning journey.</p>
                
                <h5>Affordable Education</h5>
                <p>Online Quran classes are often more affordable than traditional in-person classes, making quality Quranic education accessible to more women.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Choosing Our Online Quran Classes for Ladies</h2>
                <h5>Experienced Female Teachers</h5>
                <p>Our online Quran classes feature experienced female teachers who are dedicated to helping you achieve your learning goals.</p>
                
                <h5>Personalized Learning Plans</h5>
                <p>We offer personalized learning plans tailored to your specific needs and goals, ensuring effective and efficient learning.</p>
                
                <h5>Interactive and Engaging</h5>
                <p>Our classes are designed to be interactive and engaging, with live sessions, multimedia resources, and active participation from students.</p>
                
                <h5>Flexible Timings</h5>
                <p>With flexible class timings, you can easily fit Quran learning into your schedule, no matter how busy you are.</p>
                
                <h5>One-on-One Sessions</h5>
                <p>We offer one-on-one tutoring sessions for personalized attention and guidance, helping you progress at your own pace.</p>
                
                <h5>Comprehensive Curriculum</h5>
                <p>Our comprehensive curriculum covers all aspects of Quranic education, from basic recitation to advanced studies in Tajweed and Tafseer.</p>
                
                <h5>Community Support</h5>
                <p>Join a supportive community of learners who share your goals and values, providing encouragement and motivation throughout your learning journey.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START YOUR ONLINE QURAN LEARNING JOURNEY TODAY</h2>
                <p>Embark on your Quran learning journey with our online Quran classes for ladies. Whether you are a beginner or looking to advance your skills, our program offers the resources and support you need. Take a demo class and experience the benefits firsthand.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default OnlineQuranClassesLadies;
