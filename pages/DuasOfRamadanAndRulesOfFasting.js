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
    mainHeading: 'Duas of Ramadan and Rules of Fasting',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const DuasOfRamadanAndRulesOfFasting = () => {
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
                <h2>Essential Duas of Ramadan</h2>
                <p>Ramadan is a blessed month filled with opportunities for spiritual growth and drawing closer to Allah. One of the key practices during Ramadan is making duas (supplications). Here are some essential duas for Ramadan:</p>
                
                <h5>Dua for Beginning the Fast (Suhoor)</h5>
                <p>&lsquo;Wa bisawmi ghadinn nawaiytu min shahri Ramadan.&lsquo;</p>
                <p><i>نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ</i></p>
                <p><i>I intend to keep the fast for tomorrow in the month of Ramadan.</i></p>

                <h5>Dua for Breaking the Fast (Iftar)</h5>
                <p>&lsquo;Allahumma inni laka sumtu wa bika aamantu wa &lsquo;alayka tawakkaltu wa &lsquo;ala rizq-ika-aftartu.&lsquo;</p>
                <p><i>اللهم إني لك صمت وبك آمنت وعليك توكلت وعلى رزقك أفطرت</i></p>
                <p><i>O Allah! I fasted for You, and I believe in You, and I put my trust in You, and with Your sustenance, I break my fast.</i></p>
                
                <h5>Dua for Laylatul Qadr</h5>
                <p>&lsquo;Allahumma innaka &lsquo;afuwwun tuhibbul &lsquo;afwa fa&lsquo;fu &lsquo;anni.&lsquo;</p>
                <p><i>اللهم إنك عفو كريم تحب العفو فاعف عني</i></p>
                <p><i>O Allah, You are most forgiving, and You love forgiveness; so forgive me.</i></p>

                <h5>Dua for Breaking the Fast (Alternate)</h5>
                <p>&lsquo;Dhahaba al-dhama&lsquo;u wabtallati al-urooq wa thabatal-ajru inshaAllah.&lsquo;</p>
                <p><i>ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللهُ</i></p>
                <p><i>The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.</i></p>
              </div>

              <div className={styles.metter}> 
                <h2>Rules of Fasting in Ramadan</h2>
                <h5>Intention (Niyyah)</h5>
                <p>Fasting during Ramadan requires an intention made before dawn each day. The intention can be made in the heart and does not need to be spoken aloud. It is essential to have the intention of fasting for the sake of Allah.</p>
                
                <h5>Pre-Dawn Meal (Suhoor)</h5>
                <p>It is highly recommended to eat a pre-dawn meal (Suhoor) before the Fajr prayer. This meal helps to sustain the fast throughout the day and is a blessed act. The Prophet Muhammad (PBUH) said, &lsquo;Take Suhoor as there is a blessing in it&lsquo; (Bukhari).</p>
                
                <h5>Abstaining from Food and Drink</h5>
                <p>From dawn (Fajr) until sunset (Maghrib), Muslims must abstain from eating, drinking, smoking, and marital relations. This period of abstention is an act of worship and self-discipline.</p>
                
                <h5>Refraining from Sinful Behavior</h5>
                <p>Fasting is not just about abstaining from food and drink; it also involves refraining from sinful behavior, including lying, backbiting, and engaging in inappropriate activities. The Prophet Muhammad (PBUH) said, &lsquo;Whoever does not give up false speech and evil actions, Allah is not in need of his leaving his food and drink&lsquo; (Bukhari).</p>
                
                <h5>Breaking the Fast (Iftar)</h5>
                <p>The fast is broken at sunset (Maghrib) with a meal called Iftar. It is traditional to break the fast with dates and water, followed by a meal. The Prophet Muhammad (PBUH) would break his fast with ripe dates before praying; if there were no dates, he would take sips of water.</p>
                
                <h5>Exemptions from Fasting</h5>
                <p>Certain individuals are exempt from fasting, including children, the elderly, the sick, pregnant or breastfeeding women, and travelers. These individuals can make up missed fasts later or offer fidya (compensation) if they are unable to fast.</p>
                
                <h5>Making Up Missed Fasts</h5>
                <p>Missed fasts should be made up after Ramadan before the next Ramadan begins. If someone cannot make up the fasts due to a chronic illness, they should offer fidya. Fidya involves feeding a needy person for each missed day of fasting.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Additional Practices During Ramadan</h2>
                <h5>Taraweeh Prayers</h5>
                <p>During Ramadan, special nightly prayers called Taraweeh are performed after the Isha prayer. These prayers involve the recitation of long portions of the Quran. It is a Sunnah to perform these prayers in congregation at the mosque, but they can also be performed individually at home.</p>
                
                <h5>Increased Recitation of the Quran</h5>
                <p>Muslims are encouraged to increase their recitation of the Quran during Ramadan, aiming to complete the entire Quran at least once during the month. This practice helps to deepen one&lsquo;s connection with Allah and understand His guidance.</p>
                
                <h5>Charity and Good Deeds</h5>
                <p>Ramadan is a time of increased charity and good deeds. Muslims are encouraged to give generously to those in need and engage in acts of kindness. The reward for good deeds is multiplied during this blessed month. Zakat (obligatory charity) is often paid during Ramadan.</p>
                
                <h5>Itikaf (Spiritual Retreat)</h5>
                <p>In the last ten days of Ramadan, some Muslims engage in Itikaf, a spiritual retreat in the mosque, dedicating their time to worship and reflection. It is a time to seek closeness to Allah and reflect on one&lsquo;s faith. The Prophet Muhammad (PBUH) would perform Itikaf during the last ten days of Ramadan.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>MAKE THE MOST OF RAMADAN</h2>
                <p>Embrace the spiritual journey of Ramadan by observing the fast, making duas, and engaging in acts of worship and kindness. May this Ramadan bring you closer to Allah and fill your heart with peace and blessings. Remember, the journey of Ramadan is not just about abstaining from food and drink but about transforming your heart and soul.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default DuasOfRamadanAndRulesOfFasting;
