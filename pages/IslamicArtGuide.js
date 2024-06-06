import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC EDUCATION',
    mainHeading: 'Islamic Art: A Journey Through Culture and Creativity',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper (1).webp',
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const IslamicArtGuide = () => {
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
                <h2>Exploring Islamic Art</h2>
                <p>Islamic art is a rich and diverse form of artistic expression that encompasses a wide range of styles, techniques, and mediums.</p>
                <p>It is deeply rooted in Islamic culture, history, and spirituality, reflecting the beauty, creativity, and symbolism inherent in the Islamic faith.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Elements of Islamic Art</h2>
                <p>Islamic art is characterized by several key elements:</p>
                <h5>Calligraphy</h5>
                <p>The art of beautiful writing, often featuring Quranic verses, hadiths, and other religious texts as decorative motifs.</p>
                <h5>Geometry</h5>
                <p>Intricate geometric patterns and designs that symbolize the unity, harmony, and order of the universe.</p>
                <h5>Arabesque</h5>
                <p>Flowing, organic motifs inspired by nature, such as vines, leaves, and flowers, often found in architecture, textiles, and pottery.</p>
                <h5>Figurative Art</h5>
                <p>While not as prominent as in some other artistic traditions, Islamic art does include figurative elements in manuscript illumination, miniature paintings, and decorative arts.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Significance of Islamic Art</h2>
                <p>Islamic art serves multiple purposes and holds deep significance:</p>
                <h5>Expression of Faith</h5>
                <p>It is a means of expressing and celebrating the beauty, wisdom, and teachings of Islam.</p>
                <h5>Cultural Identity</h5>
                <p>Islamic art is a reflection of the cultural identity and heritage of Muslim communities around the world.</p>
                <h5>Spiritual Inspiration</h5>
                <p>It provides spiritual inspiration and contemplation, serving as a reminder of the divine beauty and order in creation.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embrace the Beauty of Islamic Art</h2>
                <p>Explore the intricate patterns, rich symbolism, and timeless beauty of Islamic art, and appreciate its contribution to the cultural and artistic heritage of humanity.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default IslamicArtGuide;
