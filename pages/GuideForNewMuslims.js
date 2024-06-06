import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'GUIDE',
    mainHeading: 'Guide – New Muslims to Learn Quran',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const GuideForNewMuslims = () => {
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
                <h2>Guide for New Muslims to Learn Quran</h2>
                <p>Learning the Quran is an essential part of a new Muslim&apos;s journey. Here&apos;s a guide to help you get started:</p>
                <h5>Start with Basic Concepts</h5>
                <p>Begin by understanding the basic concepts of Islam and the Quran. Learn about Tawheed (Oneness of Allah), Prophethood, and the pillars of Islam.</p>
                <h5>Learn Arabic Alphabet</h5>
                <p>Learning the Arabic alphabet is crucial for understanding the Quran. Start with the basics and gradually progress to reading Arabic text.</p>
                <h5>Find a Qualified Teacher</h5>
                <p>Seek guidance from a qualified Quran teacher who can help you learn to recite and understand the Quran. Look for online classes or local Islamic centers offering Quranic education.</p>
                <h5>Start with Short Surahs</h5>
                <p>Begin your Quranic journey by memorizing short surahs (chapters) such as Surah Al-Fatiha, Surah Al-Ikhlas, and Surah Al-Falaq. Focus on perfecting your recitation and understanding the meanings.</p>
                <h5>Consistency is Key</h5>
                <p>Consistency is crucial for learning the Quran. Set aside dedicated time each day for Quranic studies and stick to your routine. Even short daily sessions can yield significant progress over time.</p>
                <h5>Seek Understanding</h5>
                <p>Don&apos;t just focus on memorization; strive to understand the meanings of the Quranic verses. Reflect on the teachings and apply them to your daily life.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Benefits of Learning the Quran</h2>
                <h5>Spiritual Growth</h5>
                <p>Studying the Quran nurtures spiritual growth and strengthens your connection with Allah. It provides guidance and wisdom to navigate life&apos;s challenges.</p>
                <h5>Knowledge and Understanding</h5>
                <p>The Quran is a source of profound knowledge and wisdom. Learning its teachings enhances your understanding of Islam and empowers you to make informed decisions.</p>
                <h5>Community Engagement</h5>
                <p>Engaging with the Quran fosters a sense of belonging to the Muslim community. It connects you with fellow believers and strengthens bonds of brotherhood and sisterhood.</p>
                <h5>Blessings and Rewards</h5>
                <p>Reciting and studying the Quran brings immense blessings and rewards from Allah. Every letter recited earns blessings, and sincere efforts in Quranic studies are rewarded generously.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Choosing the Right Online Quran Course</h2>
                <h5>Identify Your Learning Goals</h5>
                <p>Before enrolling in an online Quran course, it is important to identify your learning goals. Are you a beginner looking to learn the basics of Quranic reading, or are you seeking to improve your recitation and Tajweed (rules of Quranic pronunciation)? Understanding your goals will help you choose the right course.</p>
                
                <h5>Research Course Options</h5>
                <p>Research different online Quran courses and compare their offerings. Look for courses that provide structured lessons, qualified tutors, and interactive learning tools. Read reviews and testimonials from other students to gauge the quality of the course.</p>
                
                <h5>Consider Tutor Qualifications</h5>
                <p>The qualifications and experience of the tutor are crucial for effective learning. Look for tutors who are certified in Quranic studies and have experience teaching online. A good tutor should be patient, knowledgeable, and able to adapt their teaching style to your needs.</p>
                
                <h5>Check for Trial Lessons</h5>
                <p>Many online Quran courses offer trial lessons or free demos. Take advantage of these opportunities to evaluate the course and tutor before committing. This will give you a better idea of what to expect and whether the course meets your expectations.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Begin Your Quranic Journey Today</h2>
                <p>Take the first step towards learning the Quran. Join our online Quran classes designed specifically for new Muslims. Our qualified instructors will guide you through the teachings of the Quran with care and patience.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default GuideForNewMuslims;
