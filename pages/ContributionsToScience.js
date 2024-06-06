import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC HERITAGE',
    mainHeading: 'Islamic Contributions to Science and Civilization',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const IslamicSciencePage = () => {
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
                <h2>The Legacy of Islamic Science</h2>
                <p>Islamic civilization made significant contributions to various fields of science, philosophy, mathematics, medicine, astronomy, and technology.</p>
                <p>These contributions had a profound impact on the advancement of knowledge and laid the foundation for modern scientific discoveries and innovations.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Key Areas of Islamic Contributions</h2>
                <h5>Medicine and Healthcare</h5>
                <p>Explore the advancements in medicine and healthcare made by Muslim scholars such as Ibn Sina (Avicenna) and Al-Zahrawi (Albucasis).</p>
                
                <h5>Astronomy and Mathematics</h5>
                <p>Discuss the contributions of Islamic astronomers like Al-Biruni and mathematicians such as Al-Khwarizmi, who developed algebra and algorithms.</p>
                
                <h5>Philosophy and Ethics</h5>
                <p>Examine the philosophical works of Muslim philosophers like Ibn Rushd (Averroes) and Al-Farabi, contributing to ethical and moral discourse.</p>
                
                <h5>Engineering and Architecture</h5>
                <p>Highlight the achievements in engineering and architecture, including advancements in water systems, construction techniques, and urban planning.</p>
                
                <h5>Scientific Methodology</h5>
                <p>Discuss the development of scientific methodology and experimentation by Muslim scientists, laying the groundwork for modern scientific inquiry.</p>
                
                <h5>Technology and Innovation</h5>
                <p>Explore technological innovations such as the invention of the astrolabe, the development of papermaking, and contributions to navigation and geography.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Impact on Modern Civilization</h2>
                <h5>Revival of Learning</h5>
                <p>Islamic scholars played a crucial role in preserving and translating ancient Greek, Roman, and Persian texts, leading to the European Renaissance.</p>
                
                <h5>Scientific Revolutions</h5>
                <p>Discuss the influence of Islamic science on the Scientific Revolution in Europe and the subsequent advancements in various scientific disciplines.</p>
                
                <h5>Cultural Exchange</h5>
                <p>Highlight the cultural exchange and intellectual dialogue between Muslim, Christian, and Jewish scholars during the Golden Age of Islam.</p>
                
                <h5>Global Impact</h5>
                <p>Examine the global impact of Islamic contributions to science and civilization, shaping the development of knowledge and human progress.</p>
                
                <h5>Legacy and Inspiration</h5>
                <p>Celebrate the enduring legacy of Islamic science and its continued inspiration for contemporary scientists, researchers, and innovators.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Continuing the Tradition of Knowledge</h2>
                <p>Embrace the spirit of inquiry, curiosity, and learning inspired by the rich heritage of Islamic contributions to science and civilization. Join us in promoting education, research, and innovation for a better future.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default IslamicSciencePage;
