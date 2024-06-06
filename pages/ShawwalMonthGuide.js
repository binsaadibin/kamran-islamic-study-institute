import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC EDUCATION',
    mainHeading: 'Significance of the Month of Shawwal in Islam',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper (1).webp',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const ShawwalMonthGuide = () => {
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
                <h2>Understanding the Month of Shawwal</h2>
                <p>Shawwal is the tenth month of the Islamic lunar calendar and holds special significance for Muslims worldwide.</p>
                <p>It follows the month of Ramadan and is known for the practice of fasting six days during this month, which carries immense rewards.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Importance of Fasting in Shawwal</h2>
                <h5>Reward of Ramadan</h5>
                <p>Fasting six days in Shawwal is considered as if one has fasted the entire year, in addition to the rewards of fasting during Ramadan.</p>
                <h5>Spiritual Renewal</h5>
                <p>It offers an opportunity for spiritual rejuvenation and strengthening the connection with Allah after the blessed month of Ramadan.</p>
                <h5>Following the Sunnah</h5>
                <p>Following the practice of fasting in Shawwal aligns with the Sunnah of Prophet Muhammad (peace be upon him).</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Fasting in Shawwal</h2>
                <h5>Physical Health</h5>
                <p>Fasting has numerous health benefits, including detoxification and improved digestion.</p>
                <h5>Self-Discipline</h5>
                <p>It fosters self-discipline and control over desires, leading to better habits and behaviors.</p>
                <h5>Spiritual Growth</h5>
                <p>Engaging in acts of worship like fasting contributes to spiritual growth and closeness to Allah.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embrace the Blessings of Shawwal</h2>
                <p>Take advantage of the blessings of Shawwal by fasting six days and continuing the spiritual momentum gained during Ramadan.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default ShawwalMonthGuide;
