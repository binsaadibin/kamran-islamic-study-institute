import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC EDUCATION',
    mainHeading: 'Understanding Hajj: The Pilgrimage to Mecca',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper (1).webp',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const HajjGuide = () => {
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
                <h2>Introduction to Hajj</h2>
                <p>Hajj, the pilgrimage to Mecca, is one of the Five Pillars of Islam and is obligatory for all adult Muslims who are physically and financially able to undertake the journey at least once in their lifetime.</p>
                <p>It takes place annually during the Islamic lunar month of Dhu al-Hijjah and includes a series of rituals and ceremonies that trace the footsteps of Prophet Abraham (Ibrahim) and his family.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Phases of Hajj</h2>
                <p>The Hajj pilgrimage consists of several key phases:</p>
                <h5>Ihram</h5>
                <p>Pilgrims enter a state of consecration (Ihram) by wearing simple, white garments for men and modest attire for women. This symbolizes purity and equality among all pilgrims.</p>
                <h5>Tawaf</h5>
                <p>Upon arrival in Mecca, pilgrims perform Tawaf, circumambulating the Kaaba seven times in a counterclockwise direction while reciting prayers and supplications.</p>
                <h5>Sa&apos;i</h5>
                <p>Pilgrims then perform Sa&apos;i, walking briskly seven times between the hills of Safa and Marwah, reenacting Hagar&apos;s search for water for her son Ishmael.</p>
                <h5>Arafah</h5>
                <p>The most significant day of Hajj is spent at the plain of Arafah, where pilgrims stand in prayer and supplication, seeking forgiveness and blessings from Allah.</p>
                <h5>Tawaf Al-Ifadah</h5>
                <p>After Arafah, pilgrims return to Mecca to perform Tawaf Al-Ifadah, another circumambulation of the Kaaba, and the symbolic stoning of the devil at the Jamarat.</p>
                <h5>Tawaf Al-Wada&apos;a</h5>
                <p>The final act of Hajj is Tawaf Al-Wada&apos;a, the farewell circumambulation of the Kaaba before leaving Mecca.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Significance of Hajj</h2>
                <p>Hajj holds immense significance for Muslims:</p>
                <h5>Unity and Brotherhood</h5>
                <p>Hajj brings together Muslims from diverse backgrounds, fostering unity, brotherhood, and a sense of belonging to the global Muslim community.</p>
                <h5>Spiritual Renewal</h5>
                <p>It serves as a spiritual renewal and purification, allowing pilgrims to seek forgiveness, repentance, and blessings from Allah.</p>
                <h5>Following the Prophetic Tradition</h5>
                <p>Hajj follows the footsteps of Prophet Muhammad (peace be upon him) and Prophet Abraham (peace be upon him), reinforcing the importance of faith, sacrifice, and submission to Allah&apos;s commands.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embark on the Sacred Journey of Hajj</h2>
                <p>Hajj is a profound spiritual experience that deepens one&apos;s faith, devotion, and connection with Allah. It is a journey of self-reflection, humility, and seeking closeness to the Creator.</p>
                <p>May Allah grant every Muslim the opportunity to perform Hajj and accept their pilgrimage with sincerity and devotion.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default HajjGuide;
