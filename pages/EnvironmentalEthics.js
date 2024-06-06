import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC ETHICS',
    mainHeading: 'Environmental Ethics in Islamic Teachings',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const EnvironmentalEthicsPage = () => {
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
                <h2>Environmental Stewardship in Islam</h2>
                <p>Islamic teachings emphasize the importance of environmental stewardship and ethical responsibility towards the natural world.</p>
                <p>The Quran and Hadiths provide guidance on sustainable living, conservation, and respect for all creations of Allah.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Foundations of Environmental Ethics</h2>
                <h5>Quranic Verses</h5>
                <p>Explore Quranic verses that highlight the significance of nature, its beauty, and the role of humans as stewards entrusted with its care.</p>
                
                <h5>Prophetic Practices</h5>
                <p>Discuss the practices of Prophet Muhammad (peace be upon him) regarding environmental conservation, cleanliness, and sustainable living.</p>
                
                <h5>Islamic Principles</h5>
                <p>Examine Islamic principles such as amanah (trust), khalifah (stewardship), and tawhid (unity) in relation to environmental ethics.</p>
                
                <h5>Interconnectedness</h5>
                <p>Highlight the interconnectedness of all living beings and the concept of harmony (mizan) in maintaining ecological balance.</p>
                
                <h5>Sustainable Development</h5>
                <p>Discuss the concept of sustainable development in Islamic teachings, balancing human needs with environmental protection.</p>
                
                <h5>Conservation Practices</h5>
                <p>Explore conservation practices recommended in Islam, such as water conservation, planting trees, and avoiding wastefulness.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Principles of Environmental Ethics</h2>
                <h5>Respect for Creation</h5>
                <p>Emphasize respect for all creations of Allah, including animals, plants, water bodies, and the earth, as part of environmental ethics.</p>
                
                <h5>Responsibility and Accountability</h5>
                <p>Highlight the individual and collective responsibility of humans towards environmental protection and accountability in resource consumption.</p>
                
                <h5>Conservation and Preservation</h5>
                <p>Encourage conservation and preservation efforts, such as reducing pollution, protecting biodiversity, and promoting renewable energy.</p>
                
                <h5>Ethical Consumption</h5>
                <p>Promote ethical consumption habits, mindful consumption of resources, and avoiding wastefulness and extravagance.</p>
                
                <h5>Community Engagement</h5>
                <p>Advocate for community engagement in environmental initiatives, fostering awareness, education, and collaborative action.</p>
                
                <h5>Global Collaboration</h5>
                <p>Highlight the importance of global collaboration and cooperation in addressing environmental challenges and promoting sustainability.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embarking on the Path of Environmental Ethics</h2>
                <p>Join us in embracing the principles of environmental ethics in Islam. Let us work together to protect and preserve the natural world for present and future generations.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default EnvironmentalEthicsPage;
