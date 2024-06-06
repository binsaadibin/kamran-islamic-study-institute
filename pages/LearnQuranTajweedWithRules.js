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
    mainHeading: 'Learn Quran Tajweed With Rules',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg', // Fixed image URL
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const LearnQuranTajweedWithRules = () => {
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
                <h2>Importance of Learning Quran Tajweed with Rules</h2>
                <p>Tajweed refers to the set of rules governing the way in which the words of the Quran should be pronounced during its recitation. Learning Quran with Tajweed is essential for preserving the original pronunciation and ensuring that the meaning of the words is conveyed accurately. This is important for all Muslims, as the Quran is the word of Allah and should be recited correctly.</p>
                
                <h5>Benefits of Learning Tajweed</h5>
                <p>There are numerous benefits to learning the rules of Tajweed:</p>
                
                <h5>Accurate Recitation</h5>
                <p>Learning Tajweed helps in reciting the Quran accurately, ensuring that each letter is pronounced correctly and the meaning is preserved. This precision is crucial for the spiritual and emotional impact of the Quranic verses.</p>
                
                <h5>Increased Understanding</h5>
                <p>Understanding and applying the rules of Tajweed can enhance one&apos;s comprehension of the Quran. It allows for a deeper connection with the text and a more profound understanding of its messages.</p>
                
                <h5>Spiritual Benefits</h5>
                <p>Reciting the Quran with Tajweed is considered an act of worship and devotion. It brings spiritual rewards and helps to strengthen one&apos;s faith and relationship with Allah.</p>
                
                <h5>Improved Memorization</h5>
                <p>Applying Tajweed rules aids in better memorization of the Quran. The rhythmic and melodic patterns of recitation make it easier to remember and retain the verses.</p>
              </div>

              <div className={styles.metter}> 
                <h2>Online Tajweed Classes</h2>
                <h5>Flexible Scheduling</h5>
                <p>Online Tajweed classes offer the flexibility to learn at your own pace and according to your schedule. This is especially beneficial for individuals with busy lifestyles who may find it challenging to attend traditional classes.</p>
                
                <h5>Access to Qualified Tutors</h5>
                <p>Online platforms provide access to qualified and experienced Tajweed tutors from around the world. These tutors are well-versed in the rules of Tajweed and can provide personalized instruction to help you improve your recitation.</p>
                
                <h5>Interactive Learning</h5>
                <p>Online Tajweed classes often utilize interactive tools such as video conferencing, digital whiteboards, and multimedia resources to enhance the learning experience. This interactive approach makes learning engaging and effective.</p>
                
                <h5>Cost-Effective</h5>
                <p>Online classes can be more cost-effective compared to traditional in-person classes. They eliminate the need for commuting and other associated expenses, making quality education more accessible.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>How to Choose the Right Online Tajweed Course</h2>
                <h5>Identify Your Learning Goals</h5>
                <p>Before enrolling in an online Tajweed course, identify your learning goals. Are you a beginner looking to learn the basics of Tajweed, or are you seeking to refine your existing skills? Knowing your goals will help you choose the right course.</p>
                
                <h5>Research Course Options</h5>
                <p>Research different online Tajweed courses and compare their offerings. Look for courses that provide structured lessons, qualified tutors, and interactive learning tools. Reading reviews and testimonials from other students can also help you gauge the quality of the course.</p>
                
                <h5>Check Tutor Qualifications</h5>
                <p>The qualifications and experience of the tutor are crucial for effective learning. Look for tutors who are certified in Tajweed and have experience teaching online. A good tutor should be patient, knowledgeable, and able to adapt their teaching style to your needs.</p>
                
                <h5>Take Advantage of Trial Lessons</h5>
                <p>Many online Tajweed courses offer trial lessons or free demos. Use these opportunities to evaluate the course and tutor before committing. This will give you a better idea of what to expect and whether the course meets your expectations.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Your Tajweed Learning Journey Today</h2>
                <p>Enroll in an online Tajweed course today and begin your journey towards mastering the art of Quranic recitation. With the right resources, guidance, and dedication, you can improve your recitation and deepen your connection with the Quran. Take the first step towards enhancing your spiritual practice and understanding of the Quran.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default LearnQuranTajweedWithRules;
