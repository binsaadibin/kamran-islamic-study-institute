import React from 'react';
import MainHeadingOfPages from '@/components/MainHeadingOfPages';
import Layout from '../components/headerAndFooter/Layout';
import styles from '@/styles/pages/course.module.scss';
import MainCourses from '@/components/MainCourses';


const Course = () => (
  <Layout>
    <div className={styles.course}>
      {/* Pass the background image URL as a prop */}
      <MainHeadingOfPages heading='our courses' backgroundImage="/imges/course.webp" />
      <section>
      <h2>POPULAR COURSES</h2>
      <h1>Our Arabic & Islamic Courses</h1>
      <p>Explore the richness of Arabic language and Islamic teachings with our comprehensive and engaging courses tailored for a profound understanding.</p>
      </section>
      <div>
      <MainCourses/>
      </div>
    </div>
  </Layout>
);

export default Course;

