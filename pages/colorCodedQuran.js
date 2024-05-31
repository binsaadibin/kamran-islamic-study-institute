import styles from '@/styles/pages/colorCodedQuran.module.scss'


import Layout from '../components/headerAndFooter/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import MainHeadingOfPages from '@/components/MainHeadingOfPages';
import Image from 'next/image';

const chapters = [
    { id: 1, name: 'COLOR CODED QURAN JUZ 1', link: '/chapter1', image: '/imges/Saudi-Formet.webp' },
    { id: 2, name: 'COLOR CODED QURAN JUZ 2', link: '/chapter2', image: '/imges/Saudi-Formet.webp' },
    { id: 3, name: 'COLOR CODED QURAN JUZ 3', link: '/chapter3', image: '/imges/Saudi-Formet.webp' },
    { id: 4, name: 'COLOR CODED QURAN JUZ 4', link: '/chapter4', image: '/imges/Saudi-Formet.webp' },
    { id: 5, name: 'COLOR CODED QURAN JUZ 5', link: '/chapter5', image: '/imges/Saudi-Formet.webp' },
    { id: 6, name: 'COLOR CODED QURAN JUZ 6', link: '/chapter6', image: '/imges/Saudi-Formet.webp' },
    { id: 7, name: 'COLOR CODED QURAN JUZ 7', link: '/chapter7', image: '/imges/Saudi-Formet.webp' },
    { id: 8, name: 'COLOR CODED QURAN JUZ 8', link: '/chapter8', image: '/imges/Saudi-Formet.webp' },
    { id: 9, name: 'COLOR CODED QURAN JUZ 9', link: '/chapter9', image: '/imges/Saudi-Formet.webp' },
    { id: 10, name: 'COLOR CODED QURAN JUZ 10', link: '/chapter10', image: '/imges/Saudi-Formet.webp' },
    { id: 11, name: 'COLOR CODED QURAN JUZ 11', link: '/chapter11', image: '/imges/Saudi-Formet.webp' },
    { id: 12, name: 'COLOR CODED QURAN JUZ 12', link: '/chapter12', image: '/imges/Saudi-Formet.webp' },
    { id: 13, name: 'COLOR CODED QURAN JUZ 13', link: '/chapter13', image: '/imges/Saudi-Formet.webp' },
    { id: 14, name: 'COLOR CODED QURAN JUZ 14', link: '/chapter14', image: '/imges/Saudi-Formet.webp' },
    { id: 15, name: 'COLOR CODED QURAN JUZ 15', link: '/chapter15', image: '/imges/Saudi-Formet.webp' },
    { id: 16, name: 'COLOR CODED QURAN JUZ 16', link: '/chapter16', image: '/imges/Saudi-Formet.webp' },
    { id: 17, name: 'COLOR CODED QURAN JUZ 17', link: '/chapter17', image: '/imges/Saudi-Formet.webp' },
    { id: 18, name: 'COLOR CODED QURAN JUZ 18', link: '/chapter18', image: '/imges/Saudi-Formet.webp' },
    { id: 19, name: 'COLOR CODED QURAN JUZ 19', link: '/chapter19', image: '/imges/Saudi-Formet.webp' },
    { id: 20, name: 'COLOR CODED QURAN JUZ 20', link: '/chapter20', image: '/imges/Saudi-Formet.webp' },
    { id: 21, name: 'COLOR CODED QURAN JUZ 21', link: '/chapter21', image: '/imges/Saudi-Formet.webp' },
    { id: 22, name: 'COLOR CODED QURAN JUZ 22', link: '/chapter22', image: '/imges/Saudi-Formet.webp' },
    { id: 23, name: 'COLOR CODED QURAN JUZ 23', link: '/chapter23', image: '/imges/Saudi-Formet.webp' },
    { id: 24, name: 'COLOR CODED QURAN JUZ 24', link: '/chapter24', image: '/imges/Saudi-Formet.webp' },
    { id: 25, name: 'COLOR CODED QURAN JUZ 25', link: '/chapter25', image: '/imges/Saudi-Formet.webp' },
    { id: 26, name: 'COLOR CODED QURAN JUZ 26', link: '/chapter26', image: '/imges/Saudi-Formet.webp' },
    { id: 27, name: 'COLOR CODED QURAN JUZ 27', link: '/chapter27', image: '/imges/Saudi-Formet.webp' },
    { id: 28, name: 'COLOR CODED QURAN JUZ 28', link: '/chapter28', image: '/imges/Saudi-Formet.webp' },
    { id: 29, name: 'COLOR CODED QURAN JUZ 29', link: '/chapter29', image: '/imges/Saudi-Formet.webp' },
    { id: 30, name: 'COLOR CODED QURAN JUZ 30', link: '/chapter30', image: '/imges/Saudi-Formet.webp' }
  ];
  

const ColorCodedQuran = () => (
  <Layout>
     <MainHeadingOfPages heading='Color Coded Quran in PDF' backgroundImage="/imges/about.jpg" />
   <section>
   <p>The Color Coded Quran is a unique format of the Holy Quran that uses a color-coded system to help readers better understand the text. This format involves assigning different colors to different parts of the text, such as verses, words, and phrases, based on their grammatical structure or meaning.</p>
     <p>There are several different versions of the Color Coded Quran available, each with its unique color-coding system. Some versions may also include additional features, such as translations, explanations, or commentaries.</p>
     <p>The Color Coded Quran has become increasingly popular in recent years, as more people seek to deepen their understanding of the Quran and its teachings. It is available in both print and digital formats, and many online resources and apps offer this format for readers around the world.</p>
   </section>
    <div className={`container-fluid ${styles.container}`}>

      <div className="row">
        {chapters.map(chapter => (
          <div className="col-lg-2 col-md-3 col-sm-4  col-12mb-4" key={chapter.id}>
            <div className={`card ${styles.card}`}>
              <h5 className="card-title">{chapter.name}</h5>
              <Image src={chapter.image} className={`card-img-top ${styles.image}`} alt={`Juzz ${chapter.id}`} width={300} height={200} layout="responsive" />
                <a href={chapter.link} className="btn btn-primary">
                  <FontAwesomeIcon icon={faDownload} className={styles.icon} />
                <span>  Download</span>
                </a>
              </div>
            </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default ColorCodedQuran;
