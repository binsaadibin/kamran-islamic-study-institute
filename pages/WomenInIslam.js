import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Women in Islam: Empowerment and Misconceptions',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg',  // Updated image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',  // Updated image URL
  },
];

const WomenInIslamPage = () => {
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
                <h2>Empowerment of Women in Islam</h2>
                <p>Islam emphasizes the empowerment of women, granting them rights and opportunities for personal, social, and spiritual growth.</p>
                <p>Contrary to common misconceptions, Islam promotes equality, justice, and respect for women&apos;s dignity.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Addressing Misconceptions</h2>
                <h5>Subjugation and Oppression</h5>
                <p>Islam condemns any form of subjugation or oppression, including the mistreatment of women. Islamic teachings emphasize mutual respect and kindness within family and society.</p>
                
                <h5>Lack of Rights</h5>
                <p>Women in Islam have extensive rights, including the right to education, work, property ownership, and participation in decision-making processes.</p>
                
                <h5>Forced Practices</h5>
                <p>Forced practices are contrary to Islamic teachings. Islam advocates for free will and personal choice, including in matters of faith and lifestyle.</p>
                
                <h5>Misinterpretation of Sharia</h5>
                <p>Misinterpretation or misuse of Sharia (Islamic law) should not overshadow the core principles of justice, equality, and mercy that underpin Islamic teachings.</p>
                
                <h5>Cultural Practices vs. Islamic Values</h5>
                <p>It&apos;s important to differentiate between cultural practices and Islamic values. Not all cultural practices reflect true Islamic teachings.</p>
                
                <h5>Contributions of Muslim Women</h5>
                <p>Highlight the significant contributions of Muslim women throughout history and in contemporary society, showcasing their achievements and talents.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Empowering Muslim Women</h2>
                <h5>Education and Knowledge</h5>
                <p>Encourage education and knowledge acquisition among Muslim women, empowering them to excel in various fields and contribute to society.</p>
                
                <h5>Equal Opportunities</h5>
                <p>Promote equal opportunities for women in areas such as employment, leadership roles, and civic engagement, ensuring their voices are heard and valued.</p>
                
                <h5>Support Networks</h5>
                <p>Establish support networks and initiatives that address the unique needs and challenges faced by Muslim women, fostering solidarity and empowerment.</p>
                
                <h5>Advocacy and Representation</h5>
                <p>Advocate for policies and practices that promote gender equality, justice, and inclusivity, advocating for the rights and well-being of Muslim women.</p>
                
                <h5>Positive Narratives</h5>
                <p>Promote positive narratives and representations of Muslim women in media, literature, and public discourse, challenging stereotypes and misconceptions.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Celebrating Women&apos;s Empowerment in Islam</h2>
                <p>Celebrate the empowerment of women in Islam and their invaluable contributions to the global community. Join us in promoting a more inclusive, equitable, and understanding society.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default WomenInIslamPage;
