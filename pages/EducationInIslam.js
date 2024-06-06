import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'EDUCATION IN ISLAM',
    mainHeading: 'The Importance of Education in Islam',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Image URL
    name: 'Kamran Institute for Islamic Study',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png', // Icon URL
  },
];

const EducationInIslamPage = () => {
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
                <h2>The Role of Education in Islam</h2>
                <p>Education holds a central and vital role in Islam, as it is seen as a means to acquire knowledge, wisdom, and spiritual growth.</p>
                <p>Islamic teachings emphasize the pursuit of knowledge as a lifelong journey, encompassing both religious and worldly education.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Foundations of Education in Islam</h2>
                <h5>Quranic Emphasis</h5>
                <p>Explore the Quranic verses that emphasize the importance of seeking knowledge and understanding the world around us.</p>
                
                <h5>Prophetic Tradition</h5>
                <p>Highlight the teachings of Prophet Muhammad (peace be upon him) regarding the value of education, seeking knowledge from cradle to grave.</p>
                
                <h5>Intellectual Development</h5>
                <p>Discuss how education contributes to intellectual development, critical thinking, and problem-solving skills, benefiting individuals and society.</p>
                
                <h5>Spiritual Enlightenment</h5>
                <p>Examine the spiritual dimension of education, fostering a deeper connection with Allah and a greater appreciation of His creation.</p>
                
                <h5>Social and Ethical Responsibility</h5>
                <p>Emphasize the role of education in promoting social justice, ethical behavior, and responsible citizenship in accordance with Islamic values.</p>
                
                <h5>Legacy of Islamic Scholars</h5>
                <p>Highlight the contributions of Islamic scholars throughout history in various fields such as science, medicine, mathematics, philosophy, and literature, showcasing the rich heritage of Muslim scholarship.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Education in Islam</h2>
                <h5>Personal Growth</h5>
                <p>Discuss how education leads to personal growth, self-improvement, and a deeper understanding of one&lsquo;s faith and purpose in life.</p>
                
                <h5>Community Development</h5>
                <p>Examine how educated individuals contribute to the development and progress of their communities through knowledge-sharing, leadership, and innovation.</p>
                
                <h5>Empowerment and Opportunities</h5>
                <p>Highlight the empowerment and opportunities that education provides, including access to better livelihoods, social mobility, and personal fulfillment.</p>
                
                <h5>Global Perspective</h5>
                <p>Discuss the importance of education in fostering a global perspective, intercultural understanding, and cooperation for a harmonious world.</p>
                
                <h5>Preservation of Knowledge</h5>
                <p>Emphasize the role of education in preserving Islamic heritage, traditions, and values, ensuring continuity and resilience in the face of challenges.</p>
                
                <h5>Continuous Learning</h5>
                <p>Encourage lifelong learning and continuous education as integral aspects of Islamic faith and practice, adapting to evolving knowledge and societal needs.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Embarking on the Path of Education</h2>
                <p>Join us in recognizing and celebrating the importance of education in Islam. Let us strive to cultivate a culture of learning, curiosity, and enlightenment in ourselves and our communities.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default EducationInIslamPage;
