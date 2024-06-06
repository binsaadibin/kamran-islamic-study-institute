import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAM EDUCATION',
    mainHeading: 'The History and Significance of Ramadan',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const RamadanHistoryAndSignificancePage = () => {
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
                <h2>The History of Ramadan</h2>
                <p>Ramadan is the ninth month of the Islamic lunar calendar and holds immense historical and spiritual significance for Muslims worldwide.</p>
                <p>It is the month in which the Quran was first revealed to Prophet Muhammad (peace be upon him), marking a period of heightened spirituality, reflection, and worship for Muslims.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Significance of Ramadan</h2>
                <h5>Spiritual Reflection</h5>
                <p>Ramadan is a time for Muslims to engage in deep spiritual reflection, seeking closeness to Allah through fasting, prayer, and acts of charity.</p>
                
                <h5>Self-Discipline</h5>
                <p>Fasting during Ramadan teaches self-discipline, self-control, and empathy for those less fortunate, fostering a sense of humility and gratitude.</p>
                
                <h5>Community Bonding</h5>
                <p>Ramadan brings communities together as Muslims gather for iftar (breaking of fast) meals, tarawih prayers, and charitable activities, strengthening social ties and solidarity.</p>
                
                <h5>Charity and Generosity</h5>
                <p>Charity (zakat) and acts of kindness are emphasized during Ramadan, encouraging Muslims to give back to their communities and support those in need.</p>
                
                <h5>Spiritual Renewal</h5>
                <p>Ramadan offers an opportunity for spiritual renewal, forgiveness, and seeking blessings from Allah, with Laylat al-Qadr (Night of Decree) being particularly significant.</p>
                
                <h5>Islamic Tradition and Culture</h5>
                <p>Observing Ramadan is an integral part of Islamic tradition and culture, symbolizing faith, devotion, and adherence to religious practices.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Celebrating Ramadan</h2>
                <h5>Family Traditions</h5>
                <p>Many families have unique traditions and customs during Ramadan, such as special meals, gatherings, and charitable initiatives.</p>
                
                <h5>Community Events</h5>
                <p>Communities organize various events and programs during Ramadan, including lectures, Quran recitation sessions, and community iftars.</p>
                
                <h5>Spiritual Growth</h5>
                <p>Individuals focus on spiritual growth and self-improvement during Ramadan, striving to strengthen their faith and connection with Allah.</p>
                
                <h5>Global Observance</h5>
                <p>Ramadan is observed by Muslims worldwide, uniting believers in a shared experience of devotion, fasting, and prayer.</p>
                
                <h5>Reflection and Gratitude</h5>
                <p>Reflect on the blessings of Ramadan and express gratitude for the opportunity to participate in this sacred month of worship and devotion.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embracing the Spirit of Ramadan</h2>
                <p>Embrace the spirit of Ramadan by engaging in acts of worship, kindness, and selflessness. May this blessed month bring peace, blessings, and spiritual fulfillment to all.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default RamadanHistoryAndSignificancePage;
