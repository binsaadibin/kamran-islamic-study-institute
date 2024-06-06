import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'ISLAMIC STUDIES',
    mainHeading: 'Sharia Law: Principles and Application',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const ShariaLawPage = () => {
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
                <h2>Understanding Sharia Law</h2>
                <p>Sharia, often misunderstood, is the Islamic legal system derived from the Quran, Hadith, and scholarly consensus.</p>
                <p>It covers various aspects of life, including personal conduct, family matters, commerce, and governance, aiming to promote justice, morality, and societal harmony.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Principles of Sharia</h2>
                <h5>Divine Source</h5>
                <p>Sharia is based on divine revelation and is considered the ultimate source of guidance for Muslims.</p>
                
                <h5>Comprehensive Guidance</h5>
                <p>Sharia provides comprehensive guidance on ethical conduct, social justice, personal rights, and obligations.</p>
                
                <h5>Justice and Equity</h5>
                <p>Justice and equity are central to Sharia, ensuring fairness and equality in legal matters.</p>
                
                <h5>Flexibility and Adaptability</h5>
                <p>Sharia is adaptable to changing circumstances and contexts while upholding its core principles.</p>
                
                <h5>Public Welfare</h5>
                <p>Sharia prioritizes the welfare of society, promoting well-being, and preventing harm.</p>
                
                <h5>Legal Sources</h5>
                <p>Primary sources of Sharia include the Quran, Sunnah (Prophetic traditions), Ijma (consensus), and Qiyas (analogy).</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Application of Sharia</h2>
                <h5>Personal Conduct</h5>
                <p>Sharia guides personal conduct in areas such as prayer, fasting, charity, honesty, and respect for others.</p>
                
                <h5>Family Law</h5>
                <p>Sharia addresses family matters including marriage, divorce, inheritance, and parental responsibilities.</p>
                
                <h5>Commercial Transactions</h5>
                <p>Sharia principles govern business transactions, contracts, finance, and ethical commerce practices.</p>
                
                <h5>Criminal Law</h5>
                <p>Sharia outlines principles for criminal justice, focusing on prevention, rehabilitation, and justice for victims.</p>
                
                <h5>Legal Systems</h5>
                <p>Sharia coexists with civil legal systems in many Muslim-majority countries, influencing laws related to personal status and religious matters.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Debunking Misconceptions</h2>
                <p>Address common misconceptions about Sharia, including its alleged harshness, lack of compatibility with modernity, and misinterpretations.</p>
                <p>Highlight the nuanced understanding and application of Sharia principles within diverse Muslim communities.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default ShariaLawPage;
