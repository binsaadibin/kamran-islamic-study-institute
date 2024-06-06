import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Online Quran Learning for Beginners',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper (1).webp',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const OnlineQuranLearningForBeginners = () => {
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
                <h2>Introduction to Online Quran Learning for Beginners</h2>
                <p>Embarking on the journey of learning the Quran is a noble endeavor, especially for beginners. Our online Quran learning program is designed to provide a seamless and enriching experience for newcomers to the world of Quranic education.</p>
                <p>Whether you&apos;re a complete beginner or have some prior knowledge, our courses cater to learners of all levels. Our experienced instructors and interactive learning materials ensure a supportive and engaging learning environment.</p>
              </div>

              <div className={styles.metter}> 
                <h2>What You&apos;ll Learn</h2>
                <h5>Quranic Recitation</h5>
                <p>Master the correct pronunciation and recitation of Quranic verses, starting from the basics and progressing to more advanced levels.</p>
                <h5>Basic Tajweed Rules</h5>
                <p>Understand and apply fundamental Tajweed rules to enhance your Quranic reading and improve your connection with the sacred text.</p>
                <h5>Quran Memorization</h5>
                <p>Begin your journey of Quran memorization with systematic guidance and techniques tailored for beginners.</p>
                <h5>Quranic Studies</h5>
                <p>Explore the meanings and interpretations of Quranic verses, gaining valuable insights into Islamic teachings and principles.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Why Choose Online Quran Learning?</h2>
                <h5>Convenience and Flexibility</h5>
                <p>Study Quran online at your own pace and convenience, fitting your learning around your schedule and commitments.</p>
                <h5>Expert Guidance</h5>
                <p>Benefit from the expertise of qualified Quranic instructors who provide personalized guidance and support throughout your learning journey.</p>
                <h5>Interactive Learning</h5>
                <p>Engage in interactive lessons, discussions, and activities that enhance your understanding and retention of Quranic knowledge.</p>
                <h5>Community Engagement</h5>
                <p>Connect with fellow learners, participate in group activities, and foster a sense of community and support in your Quranic learning.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Your Quran Learning Journey Today</h2>
                <p>Enroll in our Online Quran Learning for Beginners program and take the first step towards a fulfilling and enriching Quranic education.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default OnlineQuranLearningForBeginners;
