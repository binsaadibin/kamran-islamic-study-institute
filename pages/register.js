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
      const response = await axios.post('http://localhost:3002/api/register', formData);
      console.log(response.data);
      setAlertMessage('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        selectOption: '',
        phone: '',
        country: '',
      }); // Reset the form state
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertMessage('Error submitting form');
    } finally {
      setSubmitting(false);
    }
  };

  const handleAlertClose = () => {
    setAlertMessage('');
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
                <h2 className={styles.mainHeading}>Register to Learn Quran with us</h2>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <Image src="/imges/learn-quran-01.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
                  </div>
                  <div className="col-md-9">
                    <h3>Online Quran Classes for Adults</h3>
                    <p>Elevate your Quranic knowledge with our comprehensive online classes tailored for adult learners.</p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <Image src="/imges/learn-quran-02.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
                  </div>
                  <div className="col-md-9">
                    <h3>Online Quran Classes for Ladies</h3>
                    <p>Empowering women through accessible and tailored online Quran classes.</p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <Image src="/imges/learn-quran-03.svg" alt="Placeholder Image" width={50} height={50} className={`img-fluid ${styles.image}`} />
                  </div>
                  <div className="col-md-9">
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
                      <option>Noraani Qaida</option>
                      <option>Tajweed ul Quran</option>
                      <option>Quran Reading</option>
                      <option>Learn Tafseer Quran</option>
                      <option>Quran Memorization</option>
                      <option>Quran Ijaza</option>
                      <option>Arabic Language</option>
                      <option>Learn Ten Qirat</option>
                      <option>Islamic Supplications</option>
                      <option>Pillars of Islam</option>
                      <option>Junior Level Course</option>
                      <option>Senior Level Course</option>
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
                  <div className={`alert ${styles.alertContainer} ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {alertMessage}
                    <button type="button" className={`close ${styles.alertButton}`} aria-label="Close" onClick={handleAlertClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.CounterCard}>
            <CounterCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
