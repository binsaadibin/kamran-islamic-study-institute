import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC FINANCE',
    mainHeading: 'The Role of Islamic Finance in Modern Economy',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const IslamicFinancePage = () => {
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
                <h2>Understanding Islamic Finance</h2>
                <p>Islamic finance operates on principles that adhere to Islamic law (Sharia), promoting ethical and socially responsible financial practices.</p>
                <p>It offers unique financial instruments and services that cater to the needs of individuals and businesses while upholding Sharia principles of fairness, transparency, and risk-sharing.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Key Concepts in Islamic Finance</h2>
                <h5>Prohibition of Riba</h5>
                <p>Explore the concept of Riba (interest) and its prohibition in Islamic finance, emphasizing equitable profit-sharing and avoiding exploitative practices.</p>
                
                <h5>Asset-Backed Transactions</h5>
                <p>Understand the emphasis on asset-backed transactions in Islamic finance, where investments are tied to tangible assets and real economic activities.</p>
                
                <h5>Partnership and Profit-Sharing</h5>
                <p>Discuss the principles of Mudarabah (silent partnership) and Musharakah (joint venture) in Islamic finance, promoting shared risk and reward between investors and entrepreneurs.</p>
                
                <h5>Ethical Investment Criteria</h5>
                <p>Highlight the ethical investment criteria in Islamic finance, including screening for Halal (permissible) investments and avoiding sectors such as gambling, alcohol, and pork-related businesses.</p>
                
                <h5>Social Responsibility</h5>
                <p>Examine the concept of Zakat (charitable giving) and Sadaqah (voluntary donations) in Islamic finance, promoting social welfare and poverty alleviation through financial contributions.</p>
                
                <h5>Islamic Banking and Takaful</h5>
                <p>Explore the principles of Islamic banking, Takaful (Islamic insurance), and Sukuk (Islamic bonds), providing alternative financial solutions based on Islamic principles.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Impact and Growth of Islamic Finance</h2>
                <h5>Global Reach</h5>
                <p>Discuss the global reach of Islamic finance, with institutions and services available in Muslim-majority countries and international financial centers.</p>
                
                <h5>Financial Inclusion</h5>
                <p>Highlight the role of Islamic finance in promoting financial inclusion, serving diverse communities and offering accessible and ethical financial solutions.</p>
                
                <h5>Economic Stability</h5>
                <p>Examine the potential for Islamic finance to contribute to economic stability and resilience, emphasizing risk-sharing and prudent financial management.</p>
                
                <h5>Sustainable Development</h5>
                <p>Explore how Islamic finance principles align with sustainable development goals, promoting environmental stewardship, social equity, and economic prosperity.</p>
                
                <h5>Challenges and Opportunities</h5>
                <p>Address challenges such as standardization, regulatory frameworks, and market integration while exploring opportunities for innovation, growth, and global collaboration in Islamic finance.</p>
                
                <h5>Educational Initiatives</h5>
                <p>Highlight educational initiatives and awareness programs in Islamic finance, empowering individuals and institutions with knowledge and skills for ethical financial practices.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Navigating the Future of Islamic Finance</h2>
                <p>Join us in exploring the role of Islamic finance in the modern economy, promoting ethical financial practices, financial inclusion, and sustainable economic growth.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default IslamicFinancePage;
