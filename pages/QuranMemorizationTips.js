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
    mainHeading: 'Quran Memorization Tips by Kamran Institute for Islamic Study',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper (1).webp',
    name: 'KAMRAN INSTITUTE',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const QuranMemorizationTips = () => {
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
                <h2>Discover Effective Quran Memorization Tips</h2>
                <p>At Kamran Institute for Islamic Study, we understand the importance of Quran memorization and offer valuable tips to help you excel in this spiritual journey.</p>
                <p>Memorizing the Quran requires dedication, patience, and a strategic approach. Our expert instructors have curated these tips based on years of experience to guide you towards successful memorization.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Essential Quran Memorization Tips</h2>
                <h5>Consistency is Key</h5>
                <p>Allocate dedicated time each day for Quran memorization. Consistency is crucial for retaining what you&apos;ve learned and making steady progress.</p>
                <h5>Understanding and Reflection</h5>
                <p>Try to understand the meanings of the verses you&apos;re memorizing. Reflection on the verses enhances your connection and makes memorization more meaningful.</p>
                <h5>Break it Down</h5>
                <p>Divide the Quran into manageable portions based on your capacity. Focus on mastering one section before moving on to the next.</p>
                <h5>Utilize Memorization Techniques</h5>
                <p>Explore mnemonic devices, repetition, and visualization techniques to aid memorization. Find what works best for you and incorporate it into your study routine.</p>
                <h5>Consistent Revision</h5>
                <p>Regularly revise previously memorized verses to reinforce retention. Revision prevents forgetting and strengthens your memorization over time.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Join Our Quran Memorization Program</h2>
                <p>Ready to take your Quran memorization journey to the next level? Enroll in our Quran Memorization Program at Kamran Institute for Islamic Study.</p>
                <p>Our program combines expert guidance, personalized support, and effective strategies to help you memorize the Quran with confidence and proficiency.</p>
                <p>Join a community of dedicated learners and embark on a transformative journey of spiritual growth and Quranic knowledge.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Memorizing with Confidence</h2>
                <p>Begin implementing these Quran memorization tips today and witness the progress in your journey towards memorizing the Holy Quran.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default QuranMemorizationTips;
