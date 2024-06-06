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
    mainHeading: 'Online Quran Classes USA',
    picture: '/imges/usa-quran-classes.jpg',  // Update the image path accordingly
    name: 'BINSAADI.COM',
    icon: '/imges/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png',
  },
];

const OnlineQuranClassesUSA = () => {
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
                <h2>Why Take Online Quran Classes in the USA? 7 Key Benefits</h2>
                <p>For Muslims living in the USA, learning the Quran can be challenging due to geographical and time constraints. However, online Quran classes offer a flexible and effective solution to these challenges.</p>
                <p>Online Quran classes provide access to qualified teachers, structured learning plans, and a supportive environment that can help students of all ages and levels succeed in their Quranic studies.</p>
                <p>Here are the top reasons why taking online Quran classes in the USA is a great choice:</p>
              </div>

              <div className={styles.metter}> 
                <h2>Importance of Online Quran Classes</h2>
                <h5>Accessibility</h5>
                <p>Online Quran classes make learning accessible to everyone, regardless of their location. You can connect with qualified teachers from the comfort of your home.</p>
                
                <h5>Flexible Scheduling</h5>
                <p>Online classes offer flexible scheduling, allowing students to choose class times that fit their busy lives. This is particularly beneficial for working professionals and students with varying schedules.</p>
                
                <h5>Qualified Instructors</h5>
                <p>Many online Quran programs provide access to highly qualified and experienced instructors who can offer personalized attention and guidance.</p>
                
                <h5>Structured Curriculum</h5>
                <p>Online Quran classes follow a structured curriculum that ensures comprehensive learning, from basic recitation to advanced Tajweed and Tafseer.</p>
                
                <h5>Interactive Learning</h5>
                <p>Many online platforms offer interactive learning environments, including live sessions, discussions, and one-on-one tutoring, enhancing the learning experience.</p>
                
                <h5>Community and Support</h5>
                <p>Online Quran classes often include a community of learners, providing support, motivation, and a sense of belonging. This can be particularly beneficial for Muslims living in non-Muslim-majority areas.</p>
                
                <h5>Cost-Effective</h5>
                <p>Online Quran classes are often more affordable than traditional in-person classes, making quality education accessible to more people.</p>
              </div> 

              <div className={styles.classes}> 
                <h2>Benefits of Choosing Our Online Quran Classes</h2>
                <h5>Experienced Teachers</h5>
                <p>Our online Quran classes feature experienced and knowledgeable teachers who are dedicated to helping you achieve your learning goals.</p>
                
                <h5>Personalized Learning Plans</h5>
                <p>We offer personalized learning plans tailored to your specific needs and goals, ensuring effective and efficient learning.</p>
                
                <h5>Interactive and Engaging</h5>
                <p>Our classes are designed to be interactive and engaging, with live sessions, multimedia resources, and active participation from students.</p>
                
                <h5>Flexible Timings</h5>
                <p>With flexible class timings, you can easily fit Quran learning into your schedule, no matter how busy you are.</p>
                
                <h5>One-on-One Sessions</h5>
                <p>We offer one-on-one tutoring sessions for personalized attention and guidance, helping you progress at your own pace.</p>
                
                <h5>Comprehensive Curriculum</h5>
                <p>Our comprehensive curriculum covers all aspects of Quranic education, from basic recitation to advanced studies in Tajweed and Tafseer.</p>
                
                <h5>Community Support</h5>
                <p>Join a supportive community of learners who share your goals and values, providing encouragement and motivation throughout your learning journey.</p>
              </div> 

              <div className={styles.journey}> 
                <h2>START YOUR ONLINE QURAN LEARNING JOURNEY TODAY</h2>
                <p>Embark on your Quran learning journey with our online Quran classes in the USA. Whether you are a beginner or looking to advance your skills, our program offers the resources and support you need. Take a demo class and experience the benefits firsthand.</p>
              </div> 
            </div>
          </main>
          <div><BlogSidebar /></div>
        </div>
      </Layout>
    </div>
  );
};

export default OnlineQuranClassesUSA;
