import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAM EDUCATION',
    mainHeading: 'Sufism: The Mystical Path of Islam',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const SufismPage = () => {
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
                <h2>Exploring Sufism: The Mystical Path</h2>
                <p>Sufism is a mystical dimension of Islam that focuses on spiritual development, inner purification, and a deeper connection with the Divine.</p>
                <p>It encompasses various practices, teachings, and philosophies aimed at attaining spiritual enlightenment and closeness to Allah.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Key Aspects of Sufism</h2>
                <h5>Spiritual Practices</h5>
                <p>Explore the spiritual practices of Sufism, including meditation, chanting (dhikr), contemplation, and seeking inner awakening.</p>
                
                <h5>Mystical Journey</h5>
                <p>Understand the concept of the mystical journey in Sufism, which involves stages of spiritual growth, purification of the heart, and union with the Divine.</p>
                
                <h5>Sufi Orders and Teachers</h5>
                <p>Learn about the various Sufi orders (tariqas) and renowned Sufi teachers (shaykhs) who have contributed to the development of Sufism.</p>
                
                <h5>Love and Devotion</h5>
                <p>Discover the central themes of love (ishq) and devotion (ibadah) in Sufism, emphasizing the importance of love as a transformative force.</p>
                
                <h5>Poetry and Music</h5>
                <p>Explore the rich tradition of Sufi poetry (such as ghazals and qawwalis) and music (sama) as expressions of spiritual longing and ecstasy.</p>
                
                <h5>Universal Brotherhood</h5>
                <p>Highlight the principle of universal brotherhood and tolerance in Sufism, promoting peace, harmony, and acceptance of diverse spiritual paths.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>The Essence of Sufism</h2>
                <h5>Inner Transformation</h5>
                <p>Sufism emphasizes inner transformation, purifying the heart from worldly attachments and ego-driven desires to attain spiritual enlightenment.</p>
                
                <h5>Seeking Divine Proximity</h5>
                <p>Sufis seek closeness to Allah (al-‘Uboodiyah) through spiritual practices, seeking to experience the Divine Presence in every aspect of life.</p>
                
                <h5>Service and Compassion</h5>
                <p>Emphasize the importance of service (khidmah) and compassion (rahmah) in Sufism, reflecting the teachings of mercy and kindness in Islam.</p>
                
                <h5>Tolerance and Respect</h5>
                <p>Sufism promotes tolerance, respect, and understanding towards all individuals, irrespective of their beliefs or backgrounds.</p>
                
                <h5>Living a Balanced Life</h5>
                <p>Encourage a balanced approach to life, combining spiritual pursuits with ethical conduct, social responsibility, and engagement with the world.</p>
                
                <h5>Unity of Existence</h5>
                <p>Discuss the concept of the Unity of Existence (wahdat al-wujud) in Sufism, emphasizing the interconnectedness of all creation and the Divine Oneness.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embarking on the Sufi Path</h2>
                <p>Embark on the mystical journey of Sufism, exploring the depths of spirituality, love, and devotion. Join our Sufi teachings and practices to experience the transformative power of the mystical path.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default SufismPage;
