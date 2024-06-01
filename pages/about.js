import React from 'react';
import CardsRow from '@/components/CardsRow';
import Layout from '../components/headerAndFooter/Layout';
import styles from '@/styles/pages/about.module.scss';
import OfferCardsCarousel from '@/components/carouseles/OfferCardsCarousel';
import ReviewsCarousel from '@/components/carouseles/ReviewsCarousel';
import MainHeadingOfPages from '@/components/MainHeadingOfPages';

const About = () => (
  <Layout>
    <div>
      <>hhhhhhhhhhhh</>
      <MainHeadingOfPages heading='About us' backgroundImage="/imges/about.jpg" />
      <section className={styles.firstSection}>
        <p className={styles.text}>
          Welcome to our Online Madrasa, a Quran teaching organization providing online Quran classes worldwide. As a leading online Quran academy in the West for the past 12 years, we have designed special courses for both kids and elders. Our team comprises certified and experienced teachers, both male and female. <br />

          Our vision is to offer the best opportunity for learning the Quran online, equipped with the latest technology, catering to people of all ages around the world. Our motivation stems from the realization that Muslims in Western or non-Muslim countries often lack access to mosques or Quran teaching institutes. <br />

          Recognizing that Muslims in North America and Western countries prefer learning the Quran from native Arab tutors, we strive to hire the most qualified Quran tutors, especially from Arab countries. <br />

          Our goal is to provide you with the best online Quran classes in the comfort of your own home. Our classes cater to people of all age groups, including kids, youth, and the elderly. All you need is a computer/laptop/mobile, a fast internet connection, and a headphone set to embark on your journey of learning to read the Quran online.
        </p>
      </section>

      <section className={styles.fourthSection}>
        <h2>ONLINE QURAN TEACHING</h2>
        <h1>What We Offer</h1>
        <p>
          We are an innovative platform where our expert tutors share their knowledge, wisdom, and positive experience. We hire both male and female teachers equipped with expertise in Quran Recitation, Tajweed, Translation, Fiqh, Hadith, and Arabic. They are adept in online teaching skills and perform their duties diligently. Our qualified tutors can deliver education in whatever language (English, Arabic, Urdu) our worldwide students choose.
        </p>
        <div>
          <OfferCardsCarousel/>
        </div>
      </section>

      <section className={styles.secondSection}>
        <h1>Why Learn the Quran?</h1>
        <p className={styles.text}>
          As Muslims, it is our obligation to learn the Quran and pass its teachings to our children. The Quran, when learned properly, helps us understand what Allah expects from us. It completes the iman (faith) of a Muslim, providing insight into the logic behind Islamic rules and teachings.
        </p>
        <h2 className={styles.secondSectionHeading2}>As Stated in the Quran</h2>
        <p className={styles.text}>
          Translation: &quot;And We revealed to you the message (Quran) that you may make clear to the people what was sent down to them and that they might give thought.&quot; [AlQur’a 16:44]
        </p>
        <h2 className={styles.secondSectionHeading2}>Numerous hadiths also emphasize the importance of learning the Quran:</h2>
        <p className={styles.text}>
          Narrated Uthman bin Affan: The Prophet said, &quot;The most superior among you (Muslims) are those who learn the Quran and teach it.&quot; [Sahih Bukhari Volume 6, Book 61, Number 545] <br />
          &quot;O People of the Quran, do not treat the Quran casually. Read it day and night as if it is the Haq of Recitation. Reflect upon its teachings to attain success. Do not rush for its reward, for the reward is great and will be given in the Hereafter.&quot; [Bahiqi]
        </p>
      </section>

      <CardsRow/>

      <section className={styles.fifthSection}>
        <h1>Customer Reviews</h1>
        <p>
          Explore the richness of Arabic language and Islamic teachings with our comprehensive and engaging courses tailored for a profound understanding.
        </p>
        <ReviewsCarousel/>
      </section>
    </div>
  </Layout>
);

export default About;
