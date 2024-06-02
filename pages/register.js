// import OfferCardsCarousel from '@/components/carouseles/OfferCardsCarousel';
// import Layout from '../components/headerAndFooter/Layout';
// import styles from '@/styles/pages/register.module.scss' 
// import CounterCard from '@/components/CounterCard';
// import ContactCards from '@/components/ContactCards';

// const Register = () => (
//   <Layout>
//     <div className={styles.registerPage}>
//     <div className={styles.register}>
//       <div>
//         <ContactCards/>
//       </div>
//     <div className="container">
//     <div className="row d-flex justify-content-between">
//         {/* First Column */}
//         <div className={`col-md-7 ${styles.firstColumn}`}>
//           {/* Main Heading */}
//           <h2 className={styles.mainHeading}>Register to Learn Quran with us</h2>
//           {/* First Section */}
//           <div className="row mb-4">
//             <div className="col-md-2">
//               {/* Picture */}
//               <Image src="/imges/learn-quran-01 (1).svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
//             </div>
//             <div className="col-md-9">
//               {/* Heading and Description */}
//               <h3>Fast-track Your Quran Learning</h3>
//               <p>Accelerate your journey in mastering the Quran with our streamlined learning approach.</p>
//             </div>
//           </div>
//           {/* Second Section */}
//           <div className="row mb-4">
//             <div className="col-md-2">
//               {/* Picture */}
//               <Image src="/imges/learn-quran-03 (1).svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
//             </div>
//             <div className="col-md-9">
//               {/* Heading and Description */}
//               <h3>Online Quran Classes for Ladies</h3>
//               <p>Empowering women through accessible and tailored online Quran classes.</p>
//             </div>
//           </div>
//           {/* Third Section */}
//           <div className="row">
//             <div className="col-md-2">
//               {/* Picture */}
//               <Image src="/imges/learn-quran-03.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
//               <img src="/imges/learn-quran-03.svg" alt="Placeholder Image" className={`img-fluid ${styles.image}`} />
//             </div>
//             <div className="col-md-9">
//               {/* Heading and Description */}
//               <h3>Online Quran Classes for Adults</h3>
//               <p>Elevate your Quranic knowledge with our comprehensive online classes tailored for adult learners.</p>
//             </div>
//           </div>
//         </div>
//         {/* Second Column */}
//         <div className={`col-md-5 ${styles.secondColumn}`}>
//   {/* Message Form */}
//   <form>
//     <h2>Fill the form below</h2>
//     <div className="form-group position-relative">
//       <label htmlFor="name" className={`${styles.outsideLabel} ${styles.topLeft}`}>Name</label>
//       <input type="text" className="form-control" id="name" placeholder="" />
//     </div>
//     <div className="form-group position-relative">
//       <label htmlFor="email" className={`${styles.outsideLabel} ${styles.topLeft}`}>Email</label>
//       <input type="email" className="form-control" id="email" placeholder="" />
//     </div>
//     <div className="form-group position-relative">
//       <label htmlFor="selectOption" className={`${styles.outsideLabel} ${styles.topLeft}`}>Select Option</label>
//       <select className="form-control" id="selectOption">
//         <option>—Please choose an option—</option>
//         <option>Option 2</option>
//         <option>Option 3</option>
//         <option>Option 4</option>
//       </select>
//     </div>
//     <div className="form-group position-relative">
//       <label htmlFor="phone" className={`${styles.outsideLabel} ${styles.topLeft}`}>Phone</label>
//       <input type="text" className="form-control" id="phone" placeholder="" />
//     </div>
//     <div className="form-group position-relative">
//       <label htmlFor="country" className={`${styles.outsideLabel} ${styles.topLeft}`}>Country</label>
//       <input type="text" className="form-control" id="country" placeholder="" />
//     </div>
//     <button type="submit" className="btn btn-primary">SUBMIT NOW</button>
//   </form>
// </div>

//       </div>
//     </div>
//     </div>
//     <div className={styles.detail}>
//         <h2>Discover the Advantages</h2>
//         <h1>Why Learn the Quran Online?</h1>
//         <p>Many beginners, whether young or old, can find the initial steps of Quranic study to be overwhelming. Traditional methods often require students to attend in-person classes at a mosque or religious school, which may not always be practical or available for everyone. There are many reasons why one might choose to learn the Quran online. some of the benefits of learning the Quran online include:</p>
//         <div className={styles.OfferCardsCarousel}>
//           <OfferCardsCarousel/>
//         </div>
      // <div className={styles.CounterCard}>
      //   <CounterCard/>
      // </div>

//     </div>
//     </div>
//   </Layout>
// );

// export default Register;



import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/headerAndFooter/Layout';
import styles from '@/styles/pages/register.module.scss';
import OfferCardsCarousel from '@/components/carouseles/OfferCardsCarousel';
import CounterCard from '@/components/CounterCard';
import ContactCards from '@/components/ContactCards';
import Image from 'next/image';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectOption: '',
    phone: '',
    country: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/api/register', formData);
      console.log(response.data);
      setAlertMessage('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertMessage('Error submitting form');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className={styles.registerPage}>
        <div className={styles.register}>
          <div>
            <ContactCards />
          </div>
          <div className="container">
            <div className="row d-flex justify-content-between">
            <div className={`col-md-7 ${styles.firstColumn}`}>
          {/* Main Heading */}
          <h2 className={styles.mainHeading}>Register to Learn Quran with us</h2>
          {/* First Section */}
          <div className="row mb-4">
  <div className="col-md-2">
    {/* Picture */}
    <Image src="/imges/learn-quran-01.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
  </div>
  <div className="col-md-9">
    {/* Heading and Description */}
    <h3>Online Quran Classes for Adults</h3>
    <p>Elevate your Quranic knowledge with our comprehensive online classes tailored for adult learners.</p>
  </div>
</div>
          {/* Second Section */}
          <div className="row mb-4">
            <div className="col-md-2">
              {/* Picture */}
              <Image src="/imges/learn-quran-02.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-9">
              {/* Heading and Description */}
              <h3>Online Quran Classes for Ladies</h3>
              <p>Empowering women through accessible and tailored online Quran classes.</p>
            </div>
          </div>
          {/* Third Section */}
          <div className="row mb-4">
            <div className="col-md-2">
              {/* Picture */}
              <Image src="/imges/learn-quran-03.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-9">
              {/* Heading and Description */}
              <h3>Online Quran Classes for Adults</h3>
              <p>Elevate your Quranic knowledge with our comprehensive online classes tailored for adult learners.</p>
            </div>
          </div>
        </div>
              <div className={`col-md-5 ${styles.secondColumn}`}>
                <form onSubmit={handleSubmit}>
                  <h2>Fill the form below</h2>
                  <div className="form-group position-relative">
                    <label htmlFor="name" className={`${styles.outsideLabel} ${styles.topLeft}`}>Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="email" className={`${styles.outsideLabel} ${styles.topLeft}`}>Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="selectOption" className={`${styles.outsideLabel} ${styles.topLeft}`}>Select Option</label>
                    <select className="form-control" id="selectOption" name="selectOption" value={formData.selectOption} onChange={handleChange}>
                      <option>—Please choose an option—</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="phone" className={`${styles.outsideLabel} ${styles.topLeft}`}>Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="country" className={`${styles.outsideLabel} ${styles.topLeft}`}>Country</label>
                    <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'SUBMIT NOW'}
                  </button>
                </form>
                {alertMessage && (
                  <div className={`alert ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {alertMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
        <div className={styles.CounterCard}>
        <CounterCard/>
      </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
