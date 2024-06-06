import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import BlogContent from '@/components/BlogContent';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAM EDUCATION',
    mainHeading: 'The Life of Prophet Muhammad (PBUH): Biography and Teachings',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LifeOfProphetMuhammadClasses = () => {
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
                <h2>Why Learn About the Life of Prophet Muhammad (PBUH)?</h2>
                <p>Studying the life of Prophet Muhammad (peace be upon him) is crucial for every Muslim. Our classes offer a detailed exploration of his biography, teachings, and legacy.</p>
                <p>Understanding the life of the Prophet provides guidance on how to lead a righteous and virtuous life, following his example as the ideal role model.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Life and Teachings of Prophet Muhammad (PBUH)</h2>
                <h5>Early Life and Prophethood</h5>
                <p>Learn about the Prophet&apos;s upbringing, his early life in Mecca, and the revelation of the Quran.</p>
                
                <h5>Mission and Challenges</h5>
                <p>Explore the challenges faced by the Prophet during his mission, including opposition from Quraysh and the Hijra to Medina.</p>
                
                <h5>Establishment of Islam</h5>
                <p>Understand the Prophet&apos;s role in establishing Islam as a comprehensive way of life, including governance, ethics, and spirituality.</p>
                
                <h5>Teachings and Sunnah</h5>
                <p>Study the Prophet&apos;s teachings on faith, morality, social justice, and interpersonal relations, as well as his Sunnah (practices).</p>
                
                <h5>Legacy and Impact</h5>
                <p>Examine the lasting legacy of Prophet Muhammad (peace be upon him) and his impact on Islamic civilization and global history.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Learning About the Life of Prophet Muhammad (PBUH)</h2>
                <h5>Spiritual Enlightenment</h5>
                <p>Deepen your spiritual connection and understanding of Islam through studying the life of the Prophet.</p>
                
                <h5>Guidance for Daily Life</h5>
                <p>Apply the teachings and examples from the Prophet&apos;s life to navigate challenges and make ethical decisions in your daily life.</p>
                
                <h5>Character Development</h5>
                <p>Improve your character and conduct by emulating the noble traits exhibited by Prophet Muhammad (peace be upon him).</p>
                
                <h5>Interfaith Understanding</h5>
                <p>Gain insights into Islam&apos;s teachings and values, fostering dialogue and understanding with people of other faiths.</p>
                
                <h5>Community Building</h5>
                <p>Strengthen bonds within the Muslim community by learning and sharing knowledge about the life of Prophet Muhammad.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embark on Your Journey to Learn About the Life of Prophet Muhammad (PBUH)</h2>
                <p>Begin your exploration of the life and teachings of Prophet Muhammad (peace be upon him) with our online classes. Whether you are a new Muslim or seeking to deepen your understanding, our program provides a comprehensive study of his life and legacy. Join us on this enlightening journey.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LifeOfProphetMuhammadClasses;
