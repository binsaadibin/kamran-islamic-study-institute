import styles from '@/styles/pages/download.module.scss';
import Layout from '../components/headerAndFooter/Layout';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import MainHeadingOfPages from '@/components/MainHeadingOfPages';
import Image from 'next/image';

const books = [
    { 
        id: 1, 
        name: 'Noorani Qaida In Urdu', 
        link: '/nooraniQaidaInUrdu', 
        image: '/imges/islamic-book-cover-design-noorani-qaida-vector-design_811732-186.avif',
        description: 'A foundational book for beginners to learn the basics of reading the Quran in Urdu.'
    },
    { 
        id: 2, 
        name: 'Noorani Qaida In English', 
        link: '/nooraniQaidaInEnglish', 
        image: '/imges/Learn-Noorani-Qaida-Online.jpg',
        description: 'An English version of Noorani Qaida for beginners to learn the basics of reading the Quran.'
    },
    { 
        id: 3, 
        name: 'Rehmani Qaida in Urdu', 
        link: '/rehmaniQaida', 
        image: '/imges/screen-0.jpg',
        description: 'Rehmani Qaida in Urdu helps beginners in learning the pronunciation and recitation of Quranic verses.'
    },
    { 
        id: 4, 
        name: 'Rehmani Qaida in English', 
        link: '/rehmaniQaidaInEnglish', 
        image: '/imges/screen-0.jpg',
        description: 'The English version of Rehmani Qaida designed to assist non-Urdu speakers in learning Quranic recitation.'
    },
    { 
        id: 5, 
        name: 'Color Coded Quran', 
        link: '/colorCodedQuran', 
        image: '/imges/istockphoto-1383965120-640x640 (1).jpg',
        description: 'A Quran with color-coded Tajweed rules to help readers improve their recitation.'
    },
    { 
        id: 6, 
        name: 'Quran with English translation', 
        link: '/QuranTranslation', 
        image: '/imges/ai-generated-ramadan-kareem-with-holy-quran-and-lantern-lit-photo.jpg',
        description: 'The Quran with English translation to help understand the meanings and context of the verses.'
    },
];

const ColorCodedQuran = () => (
    <Layout>
        <MainHeadingOfPages heading='Download from here' backgroundImage="/imges/unnamed.jpg" />
        <section>
            <p>Welcome to the Download Books page, your gateway to a wide range of enlightening and informative books. We are dedicated to providing a diverse collection of books in various formats to cater to your reading preferences and interests. Whether you are looking for religious texts, educational resources, or literature to enhance your personal growth, you will find something valuable here.</p>
            <p>Our extensive library is curated to ensure that there is something for everyone, from scholars and students to casual readers and lifelong learners. By offering a variety of books, we aim to support your intellectual and spiritual journey, providing resources that inspire, educate, and entertain.</p>
        </section>
        <div className="container-fluid">
            <div className="row">
                {books.map((book, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                        <div className={`card  ${styles.card}`}>
                            <div className={styles.imageContainer}>
                                <Image src={book.image} alt={book.name} layout="fill" className={styles.image} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text">{book.description}</p>
                               <div  className={styles.link}>
                               <Link href={book.link} passHref className={styles.myLink} >
                                        <FontAwesomeIcon icon={faDownload} className={styles.icon} />
                                        <span> Download</span>
                                </Link>
                               </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
);

export default ColorCodedQuran;
