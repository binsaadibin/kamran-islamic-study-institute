import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'INTERFAITH DIALOGUE',
    mainHeading: 'Building Bridges between Islam and other Religions',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const InterfaithDialoguePage = () => {
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
                <h2>The Importance of Interfaith Dialogue</h2>
                <p>Interfaith dialogue plays a crucial role in fostering understanding, respect, and cooperation between Islam and other religions.</p>
                <p>It promotes peaceful coexistence, mutual learning, and collaboration on common societal challenges.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Principles of Interfaith Dialogue</h2>
                <h5>Respect and Tolerance</h5>
                <p>Interfaith dialogue emphasizes respect for diverse beliefs, cultures, and traditions, fostering an atmosphere of tolerance and acceptance.</p>
                
                <h5>Openness and Listening</h5>
                <p>Dialogue involves active listening, openness to differing perspectives, and a willingness to engage in meaningful discussions.</p>
                
                <h5>Education and Awareness</h5>
                <p>It promotes education about different faiths, dispelling misconceptions, and promoting accurate understanding.</p>
                
                <h5>Common Values and Goals</h5>
                <p>Highlight shared values and goals among different religions, such as compassion, justice, and peace, as a basis for collaboration.</p>
                
                <h5>Conflict Resolution</h5>
                <p>Dialogue contributes to conflict resolution by addressing misunderstandings, promoting empathy, and finding common ground.</p>
                
                <h5>Community Engagement</h5>
                <p>Encourage community engagement and joint initiatives that promote interfaith understanding, cooperation, and social cohesion.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Building Bridges</h2>
                <h5>Education and Outreach</h5>
                <p>Organize educational programs, workshops, and seminars to promote interfaith understanding and dialogue.</p>
                
                <h5>Collaborative Projects</h5>
                <p>Initiate collaborative projects on humanitarian, environmental, and social issues that unite people of different faiths in shared action.</p>
                
                <h5>Interfaith Events</h5>
                <p>Participate in interfaith events, gatherings, and celebrations to celebrate diversity and promote harmony.</p>
                
                <h5>Media and Communication</h5>
                <p>Utilize media platforms and communication channels to share positive narratives, stories of cooperation, and interfaith initiatives.</p>
                
                <h5>Leadership and Advocacy</h5>
                <p>Engage religious leaders, scholars, and community influencers in advocating for interfaith dialogue, peacebuilding, and social justice.</p>
                
                <h5>Youth Engagement</h5>
                <p>Empower youth through interfaith youth programs, dialogues, and leadership opportunities, shaping future generations as agents of peace and understanding.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Bridging Differences, Building Harmony</h2>
                <p>Join us in promoting interfaith dialogue and cooperation to bridge differences, foster harmony, and create a more peaceful and inclusive world.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default InterfaithDialoguePage;
