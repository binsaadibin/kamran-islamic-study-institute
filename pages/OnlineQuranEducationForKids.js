import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Why Online Quran Education for Kids is Better than',
    picture: '/imges/kids-learning-quran.jpg',  // Update the image path accordingly
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const OnlineQuranEducationForKids = () => {
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
                <h2>Why Online Quran Education for Kids is Better than</h2>
                <p>Online Quran education offers unique advantages for children compared to traditional methods. Here are some reasons why it&apos;s better:</p>

                <h5>Flexibility and Convenience</h5>
                <p>Online Quran education allows children to learn from the comfort of their homes, eliminating the need for travel and providing flexibility in scheduling.</p>

                <h5>Interactive Learning</h5>
                <p>Many online Quran platforms offer interactive lessons, games, and quizzes that engage children and make learning enjoyable.</p>

                <h5>Qualified Instructors</h5>
                <p>Online Quran academies often employ qualified instructors who specialize in teaching children, ensuring high-quality education and personalized attention.</p>

                <h5>Safe Learning Environment</h5>
                <p>Parents can supervise their children&apos;s online Quran education, ensuring a safe and controlled learning environment free from distractions.</p>

                <h5>Access to Resources</h5>
                <p>Online Quran platforms provide access to a wide range of resources, including audio recordings, worksheets, and educational videos, enhancing the learning experience.</p>

                <h5>Progress Tracking</h5>
                <p>Many online Quran programs offer tools for tracking children&apos;s progress, allowing parents to monitor their performance and provide support as needed.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Benefits of Online Quran Education for Kids</h2>
                <h5>Convenient Learning</h5>
                <p>Online Quran education offers flexibility and convenience, allowing children to learn at their own pace and schedule.</p>
                
                <h5>Engaging Lessons</h5>
                <p>Interactive lessons and multimedia resources make online Quran education engaging and enjoyable for children.</p>
                
                <h5>Expert Guidance</h5>
                <p>Qualified instructors provide expert guidance and personalized attention to help children learn effectively and progress in their studies.</p>
                
                <h5>Safe Environment</h5>
                <p>Parents can ensure a safe learning environment for their children by supervising their online Quran education and controlling access to online resources.</p>
                
                <h5>Access to Resources</h5>
                <p>Online Quran platforms offer a wealth of resources that complement children&apos;s learning, including audio recordings, worksheets, and educational videos.</p>
                
                <h5>Progress Monitoring</h5>
                <p>Parents can track their children&apos;s progress and performance through online tools provided by Quran education platforms, allowing for timely intervention and support.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Why Choose Online Quran Education for Your Kids?</h2>
                <h5>Convenience and Flexibility</h5>
                <p>Online Quran education offers flexibility and convenience, allowing children to learn from anywhere at any time.</p>
                
                <h5>Engaging Learning Experience</h5>
                <p>Interactive lessons and multimedia resources make learning the Quran enjoyable and memorable for children.</p>
                
                <h5>Expert Instruction</h5>
                <p>Qualified instructors provide expert guidance and support to help children learn effectively and progress in their Quran studies.</p>
                
                <h5>Safe and Controlled Environment</h5>
                <p>Parents can supervise their children&apos;s online Quran education, ensuring a safe and controlled learning environment free from distractions.</p>
                
                <h5>Access to a Wide Range of Resources</h5>
                <p>Online Quran platforms offer access to a variety of resources that complement children&apos;s learning, including audio recordings, worksheets, and educational videos.</p>
                
                <h5>Progress Monitoring and Support</h5>
                <p>Parents can track their children&apos;s progress and performance and provide support as needed, fostering continuous improvement and growth.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>Start Your Child&apos;s Online Quran Education Journey Today</h2>
                <p>Give your child the gift of quality Quran education with online learning. Explore reputable online Quran platforms and enroll your child today for a rewarding and enriching educational experience.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default OnlineQuranEducationForKids;
