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
    mainHeading: 'Online Quran Memorization Classes',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg',
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];


const NooraniQaida = () => {
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
                <h2>Why Take Online Quran Memorization Classes? 7 Top Reasons</h2>
                <p>Whenever Quran memorization is discussed, issues come to mind: How do you memorize the Quran by heart if you do not speak Arabic and live in a non-Arab country? It is a journey that requires dedication and commitment.</p>
                <p>The process can take over three years, and that varies depending on the student’s age and the time available to learn. However, our online Quran Memorization Classes offer classes in multiple languages, including English, to ensure that language is not a barrier in your Quran memorization journey.</p>
                <p>Every Muslim is required to learn the Quran and memorize it after learning it so that they can recite it in Salah and duas. Online Quran Memorization Classes can help you overcome this difficulty.</p>

             </div>

             <div className={styles.metter}> 
             <h2>Why Does Quran Memorization Matter So Much?</h2>
             <h5>Anti-Depressant</h5>
             
             <p>Allah said in the Quran in surah Yunes, verse 57</p>
             <p>“O humanity! Indeed, there has come to you a warning from your Lord, a cure for what is in the hearts, a guide, and a mercy for the believers.”</p>
             <p>Connecting with the Quran can prevent negative feelings by fostering a spiritual connection with Allah. This connection provides strength and comfort and reminds us of our ultimate purpose beyond the temporary challenges of this world. Quran memorization is not just about learning words; it’s about deepening your relationship with Allah and finding peace and solace in His words.</p>
             <h5>Improving your memory</h5>
             <p>That sounds quite encouraging for people suffering from dysfunctional memory. Like any other text, memorizing the Quran can enhance one’s ability to register and restore information better. Memorization improves neuron connections and strengthens the memory muscle. Consistent repetition makes recall easier, even after a long time.</p>
             <h5>Improved Social Status: Honor in Society</h5>
             
             <p>According to Islamic belief, parents who encourage their children to memorize the holy book are greatly rewarded by Allah on the day of judgment.</p>
             <p>The Messenger of Allah (Peace Be Upon Him) said, “The one who recites the Quran, learns it and acts upon it will be crowned with a luminous crown on the Day of Judgement. The radiance of this crown will be like that of the sun. Additionally, this person’s parents will be adorned with two jewels the world could never contain. They will ask, ‘Why have we been adorned as such?’ It will be said to them, ‘For what your child has acquired of the Quran.</p>
             <h5>Nurture Kids</h5>
             </div> 

             <div className={styles.classes}> 
             <h2>Why Online Quran Memorization Classes?</h2>
             <h5>Anytime and anywhere</h5>
           
             <p>This is the most significant advantage of online learning. It gives you the power to control every aspect of memorizing the Quran. Online Quran Memorization Classes fit seamlessly into your daily life, empowering you to learn at your own pace and convenience.</p>
             <h5>Distraction Free Envirenoment</h5>
             <p>Quiet surroundings are essential for memorizing the Quran. Online Quran memorization offers a distraction-free environment for learners to learn comfortably from their rooms. Despite being online, our classes are highly interactive, and you can ask questions and engage in discussions with your tutor and fellow students. We also offer one-on-one sessions for personalized attention and guidance.</p>
             <h5>Reasonable Price</h5>
             <p>Hiring an online Quran tutor is not expensive. You can easily find a well-qualified tutor at affordable rates.</p>
             <h5>Highly Qualified Quran Memorization Teachers</h5>
             <p>Having an expert teacher when learning the Quran is crucial, but memorizing it is even more critical. It is challenging for someone to memorize the Quran without the guidance of an expert teacher. However, finding an expert Quran tutor in some areas can be challenging due to the shortage of qualified teachers. To solve this problem, one can hire an online Quran tutor as it is easy to find an experienced Quran tutor using the internet.</p>

             <h5>No Geographical Limits</h5>
             <p>When it comes to online learning, there are no geographical limits. Depending on the type of teacher you want, you can hire an online Quran tutor from any corner of the world. Nowadays, there is no need to rely only on the teacher available in your area because you can reach any corner of the world if you have an internet connection. So, finding an expert Quran tutor to help you memorize the Quran online has become easy, making you feel included and considered in this learning journey.</p>
             <h5>Opportunity for Girls</h5>
             <p>Some girls who want to memorize the Quran cannot because they don’t get a proper learning opportunity. In this way, they remain deprived of their fundamental right to education. But it has become effortless for the girls to find a female Quran teacher online and Hifz the Quran as they don’t have to leave their homes; they can Hifz by sitting in their own homes.</p>

             <h5>Hifz improves your recitation.</h5>
             <p>“and recite the Quran with measured recitation.”(Surah Muzammil)</p>
             </div> 


             <div className={styles.journey}> 
             <h2>THE JOURNEY OF A THOUSAND MILES STARTS WITH A STEP</h2>
             <p>Take that one step today. Join the Online Madrasa Quran Memorization Course and become a Hifz-e-Quran. We offer Hifz Classes for adults, ladies, and kids. Take a demo class and decide for yourself.</p>
             </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default NooraniQaida;

