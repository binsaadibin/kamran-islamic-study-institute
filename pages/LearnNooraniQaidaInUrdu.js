import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import BlogContent from '@/components/BlogContent';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Learn Noorani Qaida in Urdu',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnNooraniQaidaInUrdu = () => {
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
                <h2>The Importance of Learning Noorani Qaida in Urdu</h2>
                <p>Noorani Qaida is the foundational book for reading the Quran, specifically designed for children and beginners. It includes the Arabic letters, diacritical marks, and various rules essential for accurate Quranic recitation. Learning Noorani Qaida in Urdu is particularly beneficial for those who have a good grasp of the Urdu language.</p>
                
                <h5>Benefits of Learning Noorani Qaida in Urdu</h5>
                <p>There are several advantages to learning Noorani Qaida in Urdu:</p>
                
                <h5>Easy Understanding</h5>
                <p>Learning in Urdu makes it easier for students to understand and memorize the rules. It reduces language barriers and makes the learning process faster and more effective.</p>
                
                <h5>Close Guidance</h5>
                <p>Learning Noorani Qaida in Urdu allows students to receive close guidance from their teachers. Teachers can explain the rules more clearly in Urdu and answer students&apos; questions effectively.</p>
                
                <h5>Comfortable Environment</h5>
                <p>Online Noorani Qaida classes provide students with a comfortable environment to learn from their homes, allowing them to study at their own pace and convenience. This is especially beneficial for those with busy daily schedules.</p>
                
                <h5>Qualified Teachers</h5>
                <p>Online Noorani Qaida classes offer access to qualified and experienced teachers. These teachers are experts in Quranic education and provide high-quality instruction to students.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Online Noorani Qaida Classes</h2>
                <h5>Flexible Scheduling</h5>
                <p>Online Noorani Qaida classes offer flexible scheduling, allowing students to learn at their own pace and according to their personal schedules. This flexibility helps students to focus better on their studies without the constraints of fixed timings.</p>
                
                <h5>Interactive Learning Environment</h5>
                <p>Online Noorani Qaida classes provide an interactive learning environment, using tools such as video conferencing, digital whiteboards, and multimedia content. This makes the learning process engaging and interactive, increasing students&apos; interest and focus.</p>
                
                <h5>Cost-Effective</h5>
                <p>Online Noorani Qaida classes are often more affordable than traditional classes. They save on transportation costs and other expenses associated with attending physical classes. Additionally, many online platforms offer flexible payment plans to accommodate different budgets.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Choosing the Right Online Noorani Qaida Course</h2>
                <h5>Identify Your Learning Goals</h5>
                <p>Before enrolling in an online Noorani Qaida course, it&apos;s important to identify your learning goals. Are you a beginner looking to learn the basics of Quranic reading, or are you seeking to improve your recitation and Tajweed (rules of Quranic pronunciation)? Understanding your goals will help you choose the right course.</p>
                
                <h5>Research Course Options</h5>
                <p>Research different online Noorani Qaida courses and compare their offerings. Look for courses that provide structured lessons, qualified tutors, and interactive learning tools. Read reviews and testimonials from other students to gauge the quality of the course.</p>
                
                <h5>Consider Tutor Qualifications</h5>
                <p>The qualifications and experience of the tutor are crucial for effective learning. Look for tutors who are certified in Quranic studies and have experience teaching online. A good tutor should be patient, knowledgeable, and able to adapt their teaching style to your needs.</p>
                
                <h5>Check for Trial Lessons</h5>
                <p>Many online Noorani Qaida courses offer trial lessons or free demos. Take advantage of these opportunities to evaluate the course and tutor before committing. This will give you a better idea of what to expect and whether the course meets your expectations.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Your Quranic Journey Today</h2>
                <p>Enroll in an online Noorani Qaida course today and start your journey towards proficient Quranic reading. With the right resources, guidance, and dedication, you can master the basics of Quranic reading and deepen your understanding of Allah&apos;s words. Take the first step towards a more fulfilling and spiritually enriching life.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LearnNooraniQaidaInUrdu;
