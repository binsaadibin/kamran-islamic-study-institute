import FeeCards from '@/components/FeeCards';
import Layout from '../components/headerAndFooter/Layout';
import styles from '../styles/pages/payment.module.scss';
import UsaCanada from '../components/feedata/UsaCanada';
import Europe from '../components/feedata/Europe';
import Australia from '../components/feedata/Australia';
import UK from '../components/feedata/UK';

const Payment = () => (
  <Layout>
    <div className={styles.payment}>
      <div className={styles.UsaCanada}>
      <h2>Select your Learning Plan</h2>
      <h1>Pricing Plans for USA & CANADA</h1>
      <p>Explore our diverse range of learning plans tailored to suit your educational goals and preferences.</p>
      <FeeCards data={UsaCanada}/>
      </div>
      <div className={styles.UK}>
      <h1>Pricing Plan for UK</h1>
      <FeeCards data={UK}/>
      </div>

      <div className={styles.Europe}>

      <h1>Pricing Plan for Europe</h1>
      <FeeCards data={Europe}/>
      </div>

      <div className={styles.Australia}>

      <h1>Pricing Plan for Australia</h1>
      <FeeCards data={Australia}/>
      </div>

      
      <div className={styles.lastDetail}>
        <p>We at Onlinemadrasa.org genuinely believe in spreading the message of the Quran to the world. Financial constraints can significantly hinder students who aspire to learn and understand the Holy Quran. But that should not stop you from pursuing your dreams. We offer discounted and completely free online Quran classes for deserving and needy students who want to learn how to read the Quran, memorize it with the help of an online tutor, and comprehend its meaning. If you are facing financial difficulties, please do not hesitate to let us know. We will provide the best Quran tutors and free online Quran classes. You deserve the opportunity to learn and grow, and we are here to help you achieve your goals.</p>
        <h2>Terms and Conditions to Join Free Quran Classes</h2>
        <p><span>Discounted Classes |</span>Onlinemadrasa.org offers a discount to those students who can&apos;t pay the Full Tuition Fee; therefore, if you can pay the discounted monthly Regular Fee, don&apos;t hesitate to get in touch with us to get the discount so that we can provide maximum ease to those students who deserve this opportunity.</p>
        <p><span>First Come First Get Basis |</span>This scholarship is Quota-based. If you apply first, you will get more chances to join our free classes. However, you will be on the waiting list even if you are not selected. As soon we get vacancies for free courses, we will contact you.</p>
        <p><span>New Converts |</span> We have a unique sponsorship program for new converts. We understand the predicaments of a recent convert. You do not have to worry about the finances for learning the Quran or Islam. We will support your journey to enlightenment.</p>
        <p><span>Merit Base Scholarship |</span>All the cases of free classes will be selected upon merit. You should have valid documents to support your financial situation.</p>
        <p><span>95 % Attendance is Mandatory |</span>We&apos;ll pay for your Quran classes from our donations. Attend all classes regularly and maintain a 95% attendance rate. Let us know in advance if you need help to attend a class. We can schedule make-up classes if required. However, your scholarship may be canceled if you miss the classes without prior intimation or valid reason since we want to optimally utilize the scholarship funds for bright and deserving students. Uninformed absentees will automatically lead to the cancellation of this scholarship. Try to prove yourself enthusiastic about learning the Quran Online. Your concern regarding our academy can play its best part in helping those who are needy. Share this aspect with your friends and family and allow us to help them.</p>

        <h2>Support a student&apos;s education by becoming a sponsor.</h2>
        <p>Onlinemadrasa.org has initiated a commendable program called Empower a Student&apos;s Future  become a sponsor today. Your generosity can make a profound impact on a promising young mind. Let&apos;s work together to create a better future. Sponsor a student seeking free Quranic education and facing challenges finding proper Quran teachers. This program is primarily aimed at new Muslims/reverts, who often struggle to find qualified Quran teachers and children of single mothers who may not have the financial means to afford such education.</p>
        <p>By sponsoring a student, you can help these deserving candidates get the education they need to become better Muslims and lead more fulfilling lives. The program is designed to ensure that students receive high-quality Quranic education and have access to experienced and qualified teachers who can guide them on their learning journey. So, if you&apos;re looking to impact the lives of others positively, consider sponsoring a student today.</p>
      </div>
      {/* <div></div> */}

    </div>
  </Layout>
);

export default Payment;