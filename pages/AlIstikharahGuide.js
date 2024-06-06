import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC EDUCATION',
    mainHeading: 'Understanding Al Istikharah: A Guide for Muslims',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper (1).webp',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const AlIstikharahGuide = () => {
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
                <h2>Introduction to Al Istikharah</h2>
                <p>Al Istikharah is a prayer seeking guidance from Allah in making decisions. It is a powerful tool for Muslims facing choices or dilemmas in life.</p>
                <p>This guide provides a comprehensive understanding of Al Istikharah, its significance, how to perform it, and how to interpret the signs received from Allah after performing the prayer.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Key Aspects of Al Istikharah</h2>
                <h5>Prayer for Guidance</h5>
                <p>Learn the steps and etiquettes of performing Al Istikharah prayer correctly, including the supplications and intentions involved.</p>
                <h5>Understanding the Signs</h5>
                <p>Gain insights into how to interpret the signs received after performing Al Istikharah, including dreams, feelings, and circumstances.</p>
                <h5>Decision-Making Process</h5>
                <p>Explore the role of Al Istikharah in the decision-making process and how it empowers Muslims to seek Allah&apos;s guidance in all aspects of life.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Why Learn Al Istikharah?</h2>
                <h5>Guidance from Allah</h5>
                <p>Al Istikharah offers a direct connection to Allah, providing clarity and confidence in decision-making.</p>
                <h5>Spiritual Empowerment</h5>
                <p>By practicing Al Istikharah regularly, Muslims strengthen their faith and reliance on Allah&apos;s wisdom and guidance.</p>
                <h5>Peace of Mind</h5>
                <p>Experience peace and tranquility knowing that decisions are made with Allah&apos;s guidance and blessings.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Your Journey with Al Istikharah</h2>
                <p>Begin your journey of understanding and practicing Al Istikharah today. May Allah guide you to what is best for you in this world and the Hereafter.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default AlIstikharahGuide;
