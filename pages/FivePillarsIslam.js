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
    mainHeading: 'Five Pillars of Islam: Understanding and Practice',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const FivePillarsIslamClasses = () => {
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
                <h2>Why Learn About the Five Pillars of Islam?</h2>
                <p>Understanding and practicing the Five Pillars of Islam is fundamental for every Muslim. Our classes provide comprehensive insights and guidance for individuals seeking to strengthen their faith and connection with Allah.</p>
                <p>Whether you are new to Islam or wish to deepen your knowledge, our courses offer a structured approach to learning about and implementing the Five Pillars.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Five Pillars of Islam</h2>
                <h5>Shahada (Faith)</h5>
                <p>Professing the faith in the oneness of Allah and the prophethood of Muhammad (peace be upon him).</p>
                
                <h5>Salah (Prayer)</h5>
                <p>Performing the five daily prayers as a means of spiritual connection and devotion.</p>
                
                <h5>Zakat (Charity)</h5>
                <p>Contributing a portion of wealth to support those in need and uphold social justice.</p>
                
                <h5>Sawm (Fasting)</h5>
                <p>Observing fasting during the month of Ramadan as a form of self-discipline and spiritual purification.</p>
                
                <h5>Hajj (Pilgrimage)</h5>
                <p>Undertaking the pilgrimage to Mecca, fulfilling one of the major obligations in Islam.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Learning About the Five Pillars</h2>
                <h5>Spiritual Enrichment</h5>
                <p>Strengthen your spiritual connection with Allah through understanding and practicing the Five Pillars.</p>
                
                <h5>Guidance for Daily Life</h5>
                <p>Apply the teachings of Islam in your daily life, fostering a sense of purpose and mindfulness.</p>
                
                <h5>Community Engagement</h5>
                <p>Participate in communal activities and rituals, building bonds with fellow Muslims and strengthening the ummah.</p>
                
                <h5>Social Responsibility</h5>
                <p>Learn about the importance of charity, social justice, and community welfare inherent in the Five Pillars.</p>
                
                <h5>Cultural Understanding</h5>
                <p>Gain insight into Islamic culture and traditions, fostering intercultural dialogue and appreciation.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embark on Your Five Pillars Journey Today</h2>
                <p>Begin your journey of understanding and practicing the Five Pillars of Islam with our online classes. Whether you are a new Muslim or seeking to deepen your knowledge, our program provides the resources and support you need. Join us and experience the transformative power of Islamic teachings.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default FivePillarsIslamClasses;

