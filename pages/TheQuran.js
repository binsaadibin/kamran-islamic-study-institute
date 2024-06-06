import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'The Quran: Divine Guidance for Humanity',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg',
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const TheQuranPage = () => {
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
                <h2>Why Study the Quran?</h2>
                <p>The Quran is the central religious text of Islam, believed by Muslims to be a revelation from God. It provides guidance, laws, and principles for personal conduct and societal norms.</p>
                <p>Studying the Quran offers numerous benefits:</p>
                <p>- Guidance for Personal Conduct</p>
                <p>- Insights into Islamic Teachings</p>
                <p>- Deepens Spiritual Connection</p>
                <p>- Educational Benefits</p>
                <p>- Cultural and Religious Understanding</p>
                <p>- Community and Social Connection</p>
                <p>- Personal Achievement</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Importance of the Quran</h2>
                <h5>Foundation of Faith</h5>
                <p>The Quran is the foundation of faith for Muslims, providing guidance in all aspects of life.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Regular recitation and study of the Quran lead to spiritual growth and a deeper connection with Allah.</p>
                
                <h5>Guidance and Wisdom</h5>
                <p>The Quran contains timeless guidance and wisdom for personal conduct, relationships, and societal norms.</p>
                
                <h5>Educational Benefits</h5>
                <p>Studying the Quran enhances cognitive abilities, improves memory, and fosters critical thinking.</p>
              </div>

              <div className={styles.classes}> 
                <h2>Advantages of Quranic Study</h2>
                <p>Embark on a journey of Quranic study and experience these benefits:</p>
                <p>- Deepens Understanding of Islam</p>
                <p>- Strengthens Faith</p>
                <p>- Enhances Moral and Ethical Values</p>
                <p>- Fosters Spiritual Growth</p>
                <p>- Promotes Interfaith Understanding</p>
                <p>- Encourages Personal Reflection</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Begin Your Quranic Journey Today</h2>
                <p>Start your Quranic journey today and explore the profound wisdom and guidance found in the Quran. Join our online Quranic study program and deepen your connection with Allah&apos;s divine message.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default TheQuranPage;
