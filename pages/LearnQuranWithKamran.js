import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Learn Quran Online with Kamran Institute for Islamic Study',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnQuranWithKamran = () => {
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
                <h2>Why Learn Quran Online with Kamran Institute for Islamic Study?</h2>
                <p>The Kamran Institute for Islamic Study offers comprehensive online Quran learning programs tailored to individual needs. Here are some compelling reasons to choose our institute:</p>
                <h5>Flexible Learning Schedule</h5>
                <p>Our online Quran classes are designed to accommodate your schedule. Whether you&apos;re a student, a working professional, or a homemaker, you can learn at your own pace and convenience.</p>
                <h5>Expert Instructors</h5>
                <p>Our instructors are highly qualified and experienced in teaching the Quran. They provide personalized attention to each student, ensuring effective learning and understanding.</p>
                <h5>Interactive Learning Environment</h5>
                <p>We offer a dynamic and interactive learning environment where students can engage with instructors and fellow classmates. This fosters a collaborative learning experience and enhances comprehension.</p>
                <h5>Comprehensive Curriculum</h5>
                <p>Our curriculum covers various aspects of Quranic studies, including Tajweed, Tafsir, and memorization (Hifz). Students receive a well-rounded education in Quranic sciences.</p>
                <h5>Convenient Access</h5>
                <p>With our online platform, you can access Quran classes from anywhere in the world. All you need is an internet connection, and you can embark on your Quran learning journey with us.</p>
                <h5>Affordable Pricing</h5>
                <p>We believe in making quality Quran education accessible to everyone. Our online classes are affordably priced, ensuring that cost is not a barrier to learning.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Benefits of Learning Quran Online</h2>
                <h5>Convenience</h5>
                <p>Online Quran learning allows you to study from the comfort of your home, eliminating the need for travel and providing flexibility in scheduling.</p>
                <h5>Personalized Learning</h5>
                <p>Each student receives personalized attention from instructors, enabling them to progress at their own pace and focus on areas of improvement.</p>
                <h5>Access to Qualified Instructors</h5>
                <p>Online platforms connect students with expert Quran teachers from around the world, ensuring access to quality education regardless of geographical location.</p>
                <h5>Interactive Learning Tools</h5>
                <p>Online Quran academies utilize interactive tools and multimedia resources to enhance the learning experience and facilitate better understanding.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Join Us Today!</h2>
                <p>Embark on your Quran learning journey with Kamran Institute for Islamic Study. Our online classes offer a comprehensive and convenient way to deepen your understanding of the Quran.</p>
                <p>Whether you&apos;re a beginner or seeking advanced studies, our programs cater to learners of all levels. Join us today and experience the transformative power of Quranic education.</p>
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

export default LearnQuranWithKamran;



