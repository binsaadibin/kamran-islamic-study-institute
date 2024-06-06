import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAM EDUCATION',
    mainHeading: 'Halal Industry: Ethics and Economics',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const HalalIndustryPage = () => {
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
                <h2>Exploring the Halal Industry</h2>
                <p>The Halal industry encompasses ethical principles and economic practices that align with Islamic values and guidelines.</p>
                <p>It covers various sectors such as food, finance, cosmetics, and tourism, providing Halal-certified products and services to Muslim consumers worldwide.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Ethical Foundations</h2>
                <h5>Halal Certification</h5>
                <p>Understand the process and significance of Halal certification, ensuring products meet Islamic dietary laws and ethical standards.</p>
                
                <h5>Animal Welfare</h5>
                <p>Explore the ethical considerations in Halal meat production, emphasizing humane treatment of animals and adherence to Halal slaughter practices.</p>
                
                <h5>Sustainability</h5>
                <p>Discuss the importance of sustainability and environmental responsibility in the Halal industry, promoting ethical sourcing and eco-friendly practices.</p>
                
                <h5>Consumer Trust</h5>
                <p>Highlight the role of trust and transparency in Halal businesses, building consumer confidence and loyalty through ethical conduct and quality assurance.</p>
                
                <h5>Social Impact</h5>
                <p>Examine the social impact of Halal businesses, including job creation, community development, and support for charitable initiatives.</p>
                
                <h5>Global Outreach</h5>
                <p>Explore the international reach of the Halal industry, catering to the diverse needs of Muslim communities worldwide and promoting cross-cultural understanding.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Economic Perspectives</h2>
                <h5>Market Trends</h5>
                <p>Analyze market trends and opportunities in the Halal industry, including growing demand, innovation, and market segmentation strategies.</p>
                
                <h5>Investment and Finance</h5>
                <p>Discuss investment opportunities and ethical considerations in Halal finance, emphasizing Sharia-compliant banking, investment funds, and Islamic economic principles.</p>
                
                <h5>Entrepreneurship</h5>
                <p>Encourage Halal entrepreneurship and business development, supporting startups, SMEs, and initiatives that promote Halal products and services.</p>
                
                <h5>Trade and Globalization</h5>
                <p>Examine the role of Halal trade agreements, certifications, and standards in facilitating global trade and promoting economic integration among Muslim-majority countries.</p>
                
                <h5>Economic Empowerment</h5>
                <p>Highlight the potential for economic empowerment and social inclusion through Halal industry initiatives, creating opportunities for growth and prosperity.</p>
                
                <h5>Challenges and Opportunities</h5>
                <p>Address challenges such as standardization, market competition, and regulatory frameworks while exploring opportunities for innovation, collaboration, and sustainable growth in the Halal sector.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Navigating Ethics and Economics in the Halal Industry</h2>
                <p>Join us in exploring the ethical foundations and economic perspectives of the Halal industry, promoting responsible business practices, economic growth, and consumer trust in Halal products and services.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default HalalIndustryPage;
