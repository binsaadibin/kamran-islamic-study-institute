import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import BlogContent from '@/components/BlogContent';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'RAMADAN PREPARATION',
    mainHeading: 'Prepare For Ramadan',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const PrepareForRamadan = () => {
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
                <h2>Why Prepare for Ramadan?</h2>
                <p>Ramadan is a month of fasting, prayer, reflection, and community for Muslims around the world. Preparing for Ramadan helps you make the most of this holy month, ensuring that you can fully engage in spiritual practices and derive the maximum benefits. Proper preparation can enhance your physical, mental, and spiritual well-being, making Ramadan a truly transformative experience.</p>
                
                <h5>Spiritual Preparation</h5>
                <p>Spiritual preparation is key to a fulfilling Ramadan. Here are some ways to prepare spiritually:</p>
                
                <h5>Increase Worship</h5>
                <p>Start increasing your acts of worship before Ramadan. Perform additional prayers, read the Quran, and engage in dhikr (remembrance of Allah). This helps you build a habit and makes it easier to maintain during Ramadan.</p>
                
                <h5>Seek Forgiveness</h5>
                <p>Ask Allah for forgiveness for any past sins and make a sincere intention to improve your faith and practice during Ramadan. This sets a positive and humble tone for the month ahead.</p>
                
                <h5>Learn About Ramadan</h5>
                <p>Study the significance and rules of Ramadan. Understanding the purpose of fasting and the rewards associated with it can motivate you to observe Ramadan with greater devotion and sincerity.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Physical Preparation</h2>
                <h5>Adjust Your Sleep Schedule</h5>
                <p>During Ramadan, Muslims wake up early for Suhoor (pre-dawn meal) and often stay up late for Taraweeh (night prayers). Gradually adjusting your sleep schedule a few weeks before Ramadan can help your body adapt to the new routine.</p>
                
                <h5>Hydrate and Eat Healthily</h5>
                <p>Start hydrating your body well in advance. Drinking plenty of water and eating nutritious meals will help you maintain energy levels during the fasting hours. Avoid excessive consumption of caffeine and sugary foods, as they can lead to dehydration and energy crashes.</p>
                
                <h5>Plan Your Meals</h5>
                <p>Prepare a meal plan for Suhoor and Iftar (breaking the fast). Focus on balanced meals that provide essential nutrients. Planning ahead can save time and reduce stress during Ramadan.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Mental and Social Preparation</h2>
                <h5>Set Goals</h5>
                <p>Set specific, achievable goals for Ramadan. Whether it&apos;s reading a certain amount of the Quran, attending all Taraweeh prayers, or increasing your charitable activities, having clear goals can keep you focused and motivated.</p>
                
                <h5>Minimize Distractions</h5>
                <p>Identify potential distractions and plan how to minimize them. This could mean reducing screen time, organizing your workspace, or scheduling time for family and social activities. Creating a distraction-free environment can enhance your spiritual experience.</p>
                
                <h5>Community Engagement</h5>
                <p>Engage with your community. Join local mosque activities, participate in charitable events, and connect with fellow Muslims. A strong sense of community can provide support and encouragement throughout Ramadan.</p>
                
                <h5>Learn Duas for Ramadan</h5>
                <p>Learn specific Duas (supplications) for Ramadan to enhance your prayers and connect more deeply with Allah. Some essential Duas for Ramadan include:</p>
                
                <h6>When beginning the fast</h6>
                <p>نَوَيْتُ صَوْمَ غَدٍ عَن أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ السَّنَةِ لِلَّهِ تَعَالَى</p>
                <p><em>(I intend to keep the fast for tomorrow in the month of Ramadan this year for the sake of Allah.)</em></p>
                
                <h6>When breaking the fast</h6>
                <p>اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ</p>
                <p><em>(O Allah! I fasted for You, I believe in You, I put my trust in You, and with Your sustenance I break my fast.)</em></p>
                
                <h6>General Duas</h6>
                <p>اللَّهُمَّ إِنِّي أَسْأَلُكَ رَحْمَتَكَ الَّتِي تَهْدِي بِهَا قُلُوبَنَا وَتَجْمَعُ بِهَا شَمْلَنَا وَتَرُدُّ بِهَا غَائِبَنَا وَتَرْفَعُ بِهَا شَاهِدَنَا وَتُزَكِّي بِهَا عَمَلَنَا وَتُلْهِمُنَا بِهَا رُشْدَنَا وَتَعْصِمُنَا بِهَا مِنْ كُلِّ سُوءٍ</p>
                <p><em>(O Allah, I ask You for Your mercy, by which You guide our hearts, unite our ranks, bring back those who have strayed, raise our standing, purify our deeds, inspire us to righteous behavior, and protect us from every evil.)</em></p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Your Ramadan Preparation Today</h2>
                <p>Begin preparing for Ramadan today to ensure you can fully benefit from this holy month. By focusing on spiritual, physical, mental, and social preparation, you can make the most of Ramadan and experience its true blessings. Remember, the journey of a thousand miles begins with a single step. Take that step now and make this Ramadan your best one yet.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default PrepareForRamadan;
