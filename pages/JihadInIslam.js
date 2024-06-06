import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAM EDUCATION',
    mainHeading: 'Jihad in Islam: Dispelling Myths and Misunderstandings',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const JihadInIslamPage = () => {
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
                <h2>Jihad in Islam: Understanding the Concept</h2>
                <p>Jihad is a complex and often misunderstood concept in Islam. It encompasses various meanings and contexts that go beyond the common misconceptions.</p>
                <p>It&apos;s crucial to dispel myths and clarify the true essence of Jihad as taught in Islamic teachings.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Meaning and Types of Jihad</h2>
                <h5>Linguistic Definition</h5>
                <p>Jihad linguistically means &apos;struggle&apos; or &apos;effort.&apos; It can refer to both internal (spiritual) and external (physical) struggles.</p>
                
                <h5>Types of Jihad</h5>
                <p>There are different types of Jihad, including Jihad al-Nafs (struggle against one&apos;s inner desires), Jihad al-Ilm (striving for knowledge), Jihad al-Da&apos;wah (preaching and inviting to Islam), and Jihad al-Asghar (defensive warfare).</p>
                
                <h5>Misconceptions about Jihad</h5>
                <p>Address common misconceptions about Jihad, such as equating it solely with violent warfare or terrorism, which is not representative of its true teachings in Islam.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Dispelling Myths and Misunderstandings</h2>
                <h5>Violence and Aggression</h5>
                <p>Jihad does not promote indiscriminate violence or aggression. It emphasizes self-defense, protection of rights, and justice.</p>
                
                <h5>Forced Conversions</h5>
                <p>Jihad does not advocate for forced conversions. Islam upholds the principle of freedom of religion and choice in matters of faith.</p>
                
                <h5>Terrorism</h5>
                <p>Terrorism is condemned in Islam, and actions that harm innocent lives are contrary to the teachings of Jihad and Islamic ethics.</p>
                
                <h5>Global Peace and Harmony</h5>
                <p>Jihad, when understood correctly, promotes global peace, harmony, and the protection of human rights for all individuals, regardless of faith.</p>
                
                <h5>Spiritual Struggle</h5>
                <p>Highlight the spiritual aspect of Jihad, which includes striving against one&apos;s ego, seeking knowledge, and practicing self-restraint and righteousness.</p>
                
                <h5>Historical Context</h5>
                <p>Provide historical context to Jihad, including its significance in early Islamic history and the principles governing just warfare in Islam.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Understanding the True Essence of Jihad</h2>
                <p>By dispelling myths and misunderstandings, we can better understand the true essence of Jihad in Islam as a multifaceted concept that promotes peace, justice, and spiritual growth.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default JihadInIslamPage;
