import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import BlogContent from '@/components/BlogContent';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC EDUCATION',
    mainHeading: 'Foundation Of Islam: Understand And Learn The',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const FoundationOfIslam = () => {
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
                <h2>Understanding the Foundations of Islam</h2>
                <p>Islam is built on five fundamental principles known as the Five Pillars of Islam. These pillars form the foundation of a Muslim&apos;s faith and practices, guiding their daily lives and spiritual growth. Understanding and adhering to these pillars is essential for every Muslim.</p>

                <h2>The Five Pillars of Islam</h2>

                <h5>Shahada (Faith)</h5>
                <p>The Shahada is the declaration of faith and the first pillar of Islam. It states: &apos;There is no god but Allah, and Muhammad is the Messenger of Allah.&apos; This testimony affirms the monotheistic belief in one God and the prophethood of Muhammad (peace be upon him).</p>

                <h5>Salah (Prayer)</h5>
                <p>Salah, the second pillar, is the practice of performing the five daily prayers. These prayers are performed at specific times throughout the day: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Salah is a direct link between the worshipper and Allah, fostering discipline, spirituality, and closeness to God.</p>

                <h5>Zakat (Charity)</h5>
                <p>Zakat, the third pillar, is the giving of alms to the needy. It is obligatory for Muslims who meet certain criteria to donate a portion of their wealth annually to those less fortunate. Zakat purifies wealth, encourages economic equality, and promotes social solidarity.</p>

                <h5>Sawm (Fasting)</h5>
                <p>Sawm, the fourth pillar, is the fasting during the month of Ramadan. Muslims abstain from food, drink, and other physical needs from dawn to sunset. Fasting teaches self-control, gratitude, and compassion for those who are hungry and less fortunate.</p>

                <h5>Hajj (Pilgrimage)</h5>
                <p>Hajj, the fifth pillar, is the pilgrimage to the holy city of Mecca, which every Muslim must undertake at least once in their lifetime if they are physically and financially able. Hajj represents the unity of the Muslim Ummah and their submission to Allah.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Significance of Each Pillar</h2>
                <h5>Shahada: Affirmation of Faith</h5>
                <p>The Shahada is the core of Islamic belief. By declaring this testimony, a Muslim acknowledges the oneness of Allah and the finality of the prophethood of Muhammad. This declaration is a lifelong commitment to live by the teachings of Islam.</p>
                
                <h5>Salah: Connection with Allah</h5>
                <p>Salah is a daily act of worship that keeps Muslims connected to Allah. It serves as a reminder of their faith and duties. The structured prayers involve physical postures and recitations from the Quran, promoting mindfulness, discipline, and spiritual well-being.</p>
                
                <h5>Zakat: Purification and Growth</h5>
                <p>Zakat purifies the giver&apos;s wealth by setting aside a portion for those in need. It fosters economic balance and supports the welfare of the community. By giving Zakat, Muslims fulfill a social responsibility and help reduce poverty and suffering.</p>
                
                <h5>Sawm: Self-Discipline and Empathy</h5>
                <p>Fasting during Ramadan develops self-discipline and empathy. It reminds Muslims of the struggles of the less fortunate and encourages gratitude and generosity. The spiritual benefits of Sawm include increased piety, self-reflection, and a stronger sense of community.</p>
                
                <h5>Hajj: Unity and Submission</h5>
                <p>Hajj is a profound spiritual journey that symbolizes the unity of Muslims worldwide. Pilgrims perform rituals that commemorate the actions of Prophet Ibrahim (Abraham) and his family. Hajj reinforces the equality of all Muslims and their submission to Allah&apos;s will.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>How to Learn and Practice the Pillars</h2>
                <h5>Study Islamic Texts</h5>
                <p>Learning about the Five Pillars of Islam begins with studying the Quran and Hadith (sayings and actions of the Prophet Muhammad). These texts provide comprehensive guidance on the principles and practices of each pillar.</p>
                
                <h5>Attend Islamic Classes</h5>
                <p>Join Islamic classes or study circles to deepen your understanding of the Five Pillars. Learning from knowledgeable teachers and scholars can provide valuable insights and practical advice on how to implement these principles in daily life.</p>
                
                <h5>Engage in Community Activities</h5>
                <p>Participate in community activities and mosque events. Engaging with fellow Muslims can enhance your understanding of the Five Pillars and provide a support system for practicing them. Community involvement also fosters a sense of belonging and shared purpose.</p>
                
                <h5>Practice Regularly</h5>
                <p>Incorporate the Five Pillars into your daily routine. Regular practice of Salah, giving Zakat, fasting, and other acts of worship strengthens your faith and helps you live according to Islamic principles. Consistency and commitment are key to integrating these practices into your life.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embark on Your Journey of Faith</h2>
                <p>Understanding and practicing the Five Pillars of Islam is a lifelong journey of faith and devotion. By embracing these foundational principles, you can strengthen your relationship with Allah and lead a life of purpose and fulfillment. Start your journey today and experience the profound impact of living by the teachings of Islam.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default FoundationOfIslam;
