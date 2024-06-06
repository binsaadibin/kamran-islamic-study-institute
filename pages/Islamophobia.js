import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'SOCIAL ISSUES',
    mainHeading: 'Islamophobia: Challenges and Responses in a Global Context',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const IslamophobiaPage = () => {
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
                <h2>The Challenge of Islamophobia</h2>
                <p>Islamophobia refers to prejudice, discrimination, and hostility towards Islam and Muslims, often fueled by stereotypes, misinformation, and fear.</p>
                <p>It poses significant challenges globally, impacting individuals, communities, and societal cohesion.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Understanding Islamophobia</h2>
                <h5>Origins and Causes</h5>
                <p>Explore the historical roots and contemporary factors contributing to Islamophobia, including political, social, and media influences.</p>
                
                <h5>Impact on Individuals and Communities</h5>
                <p>Examine the effects of Islamophobia on Muslim individuals and communities, including mental health, social exclusion, and discrimination.</p>
                
                <h5>Misconceptions and Stereotypes</h5>
                <p>Address common misconceptions and stereotypes about Islam and Muslims, highlighting the diversity and richness of Islamic beliefs and practices.</p>
                
                <h5>Legal and Human Rights Issues</h5>
                <p>Discuss the legal and human rights dimensions of combating Islamophobia, including advocacy, legislation, and international frameworks.</p>
                
                <h5>Global Perspectives</h5>
                <p>Gain insights into Islamophobia&apos;s global impact, responses, and initiatives aimed at promoting tolerance, dialogue, and mutual understanding.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Responding to Islamophobia</h2>
                <h5>Education and Awareness</h5>
                <p>Promote education, awareness, and accurate information about Islam and Muslims to counter stereotypes and misconceptions.</p>
                
                <h5>Interfaith Dialogue</h5>
                <p>Engage in interfaith dialogue and collaboration to build bridges, foster understanding, and promote respect among diverse communities.</p>
                
                <h5>Community Empowerment</h5>
                <p>Empower Muslim communities and allies to speak out against Islamophobia, advocate for their rights, and promote inclusion and diversity.</p>
                
                <h5>Media Representation</h5>
                <p>Advocate for fair and balanced media representation of Islam and Muslims, challenging negative narratives and promoting positive stories.</p>
                
                <h5>Policy Advocacy</h5>
                <p>Support policy initiatives and advocacy efforts that address Islamophobia at local, national, and international levels, ensuring legal protections and rights for all.</p>
                
                <h5>Collaborative Efforts</h5>
                <p>Promote collaborative efforts between governments, civil society, academia, and religious institutions to combat Islamophobia and promote social cohesion.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Fostering Understanding and Unity</h2>
                <p>Join us in confronting Islamophobia, fostering understanding, and promoting unity and solidarity in a diverse and interconnected world.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default IslamophobiaPage;
