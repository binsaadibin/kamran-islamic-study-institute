import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'QURAN EDUCATION',
    mainHeading: 'Teaching the Quran to Your Kids',
    picture: '/imges/kids-learning-quran.jpg',  // Update the image path accordingly
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const TeachingQuranToKids = () => {
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
                <h2>Why Teach the Quran to Your Kids? 7 Important Reasons</h2>
                <p>Introducing children to the Quran at a young age is essential for their spiritual and moral development. It provides them with a foundation of faith and values that will guide them throughout their lives.</p>
                <p>Teaching the Quran to kids helps them understand their religion, connect with their heritage, and develop a strong sense of identity and purpose. It also equips them with the knowledge and skills needed to practice their faith in daily life.</p>

                <p>Here are some of the top reasons why teaching the Quran to your kids is crucial:</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Importance of Teaching Quran to Kids</h2>
                <h5>Moral and Ethical Guidance</h5>
                <p>The Quran offers timeless moral and ethical guidance that helps children distinguish right from wrong and develop a strong sense of justice and compassion.</p>
                
                <h5>Spiritual Connection</h5>
                <p>Teaching kids the Quran helps them establish a spiritual connection with Allah, providing them with comfort and strength in their daily lives.</p>
                
                <h5>Cultural and Religious Identity</h5>
                <p>Understanding the Quran helps children connect with their cultural and religious heritage, fostering a sense of pride and belonging.</p>
                
                <h5>Intellectual Development</h5>
                <p>Memorizing and reciting the Quran can enhance children&apos;s cognitive abilities, improve their memory, and develop their linguistic skills.</p>
                
                <h5>Discipline and Patience</h5>
                <p>Learning the Quran requires dedication, discipline, and patience, qualities that benefit children in all areas of their lives.</p>
                
                <h5>Rewards and Blessings</h5>
                <p>According to Islamic teachings, teaching the Quran to children brings immense rewards and blessings for both the children and their parents.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>How to Teach Quran to Your Kids</h2>
                <h5>Start Early</h5>
                <p>Introduce your children to the Quran at a young age. Start with simple surahs and gradually progress to more complex ones.</p>
                
                <h5>Create a Routine</h5>
                <p>Establish a regular Quran study routine that fits into your family&apos;s daily schedule. Consistency is key to effective learning.</p>
                
                <h5>Use Interactive Methods</h5>
                <p>Incorporate interactive methods such as storytelling, songs, and games to make learning the Quran fun and engaging for kids.</p>
                
                <h5>Seek Professional Help</h5>
                <p>Consider enrolling your children in online Quran classes or hiring a qualified tutor to provide structured learning and personalized attention.</p>
                
                <h5>Encourage Memorization</h5>
                <p>Encourage your children to memorize the Quran by setting achievable goals and rewarding their progress. Memorization strengthens their connection with the Quran and enhances their recitation skills.</p>
                
                <h5>Be a Role Model</h5>
                <p>Set a positive example by incorporating Quran study into your own daily routine. Children learn by observing their parents, so show them the importance of the Quran in your life.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START THE JOURNEY WITH YOUR CHILDREN TODAY</h2>
                <p>Begin the beautiful journey of teaching the Quran to your kids. Join our online Quran teaching program designed for children of all ages. We offer engaging and interactive classes to help your children develop a deep love and understanding of the Quran. Take a demo class and see the difference.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default TeachingQuranToKids;
