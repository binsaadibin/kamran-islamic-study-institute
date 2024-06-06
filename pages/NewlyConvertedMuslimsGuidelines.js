import styles from '@/styles/pages/onlineQuranMemorizationClasses.module.scss';
import Layout from '../components/headerAndFooter/Layout';
import BlogSidebar from '@/components/BlogSidebar';
import AllBlogsContent from '@/components/AllBlogsContent';

const mainContent = [
  {
    smallHeading: 'GUIDELINES',
    mainHeading: 'Guidelines for Newly Converted Muslims',
    picture: '/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg',
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const NewlyConvertedMuslimsGuidelines = () => {
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
                <h2>Guidelines for Newly Converted Muslims</h2>
                <p>Converting to Islam is a profound and life-changing decision. Here are some guidelines to help newly converted Muslims navigate their journey:</p>

                <h5>Seek Knowledge</h5>
                <p>Take time to learn about the fundamental beliefs and practices of Islam. Study the Quran, Hadith, and the life of Prophet Muhammad (peace be upon him) to deepen your understanding of the faith.</p>

                <h5>Establish Prayer</h5>
                <p>Prayer is the cornerstone of a Muslim&apos;s faith. Learn how to perform the five daily prayers and establish a regular prayer routine. Seek guidance from knowledgeable Muslims or attend classes to learn the proper methods.</p>

                <h5>Connect with the Community</h5>
                <p>Joining a supportive Muslim community can provide valuable guidance, support, and companionship on your journey. Attend local mosques, Islamic centers, or community events to meet fellow Muslims and build meaningful connections.</p>

                <h5>Embrace Patience and Perseverance</h5>
                <p>Converting to Islam may come with its challenges and adjustments. Embrace patience and persevere through any difficulties you may encounter. Remember that faith is a journey, and Allah is always there to guide and support you.</p>

                <h5>Practice Compassion and Kindness</h5>
                <p>Islam emphasizes compassion, kindness, and mercy towards all beings. Strive to embody these values in your interactions with others, regardless of their background or beliefs. Treat others with respect, empathy, and generosity.</p>

                <h5>Seek Guidance and Support</h5>
                <p>Don&apos;t hesitate to seek guidance and support from knowledgeable Muslims, mentors, or community leaders. They can provide valuable advice, answer your questions, and offer spiritual support as you navigate your new faith.</p>

                <h5>Continue Learning and Growing</h5>
                <p>The journey of faith is a lifelong process of learning and growth. Stay committed to seeking knowledge, deepening your understanding of Islam, and striving to live according to its teachings. Embrace opportunities for personal and spiritual development.</p>
              </div>

              <div className={styles.metter}> 
                <h2>The Importance of Guidelines for Newly Converted Muslims</h2>
                <h5>Moral and Ethical Guidance</h5>
                <p>Understanding the guidelines for newly converted Muslims provides moral and ethical guidance, helping individuals align their actions with Islamic principles.</p>
                
                <h5>Spiritual Connection</h5>
                <p>Following these guidelines strengthens the spiritual connection of newly converted Muslims with Allah, fostering a sense of peace and tranquility.</p>
                
                <h5>Cultural and Religious Identity</h5>
                <p>Adhering to the guidelines helps new Muslims develop a strong cultural and religious identity, enabling them to integrate into the Muslim community with confidence.</p>
                
                <h5>Intellectual Development</h5>
                <p>Engaging with the guidelines promotes intellectual development by encouraging critical thinking and reflection on one&apos;s beliefs and actions.</p>
                
                <h5>Support and Unity</h5>
                <p>Following common guidelines fosters a sense of unity and support among newly converted Muslims, creating a supportive environment for their spiritual growth.</p>
                
                <h5>Continued Learning</h5>
                <p>These guidelines serve as a foundation for continued learning and growth in the Islamic faith, inspiring individuals to deepen their knowledge and practice of Islam.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>How to Implement Guidelines for Newly Converted Muslims</h2>
                <h5>Start Practicing</h5>
                <p>Begin incorporating the guidelines into your daily life, starting with small, achievable steps.</p>
                
                <h5>Seek Support</h5>
                <p>Reach out to experienced Muslims or mentors for guidance and support in implementing the guidelines effectively.</p>
                
                <h5>Reflect and Evaluate</h5>
                <p>Regularly reflect on your progress in following the guidelines and evaluate areas for improvement.</p>
                
                <h5>Stay Connected</h5>
                <p>Stay connected with the Muslim community and participate in activities that reinforce the guidelines and promote spiritual growth.</p>
                
                <h5>Seek Knowledge</h5>
                <p>Continue seeking knowledge about Islam and deepen your understanding of the faith to better implement the guidelines in your life.</p>
              </div> 

              <div className={styles.journey}> 
              <h2>Embark on Your Journey</h2>
                <p>Embrace the guidelines for newly converted Muslims as you embark on your journey of faith. With dedication, perseverance, and the support of the Muslim community, may you find peace, guidance, and fulfillment in your newfound faith.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default NewlyConvertedMuslimsGuidelines;

