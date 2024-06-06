import styles from '@/styles/components/SurahList.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SurahList = ({ surahs, onSurahClick }) => {
    return (
        <div className={`container-fluid ${styles.surahs}`}>
            <div className="row">
                {surahs.map((surah, index) => (
                    <div className={`col-lg-4 col-md-6 col-sm-12 ${styles.column}`} key={index}>
                        <div className={`card ${styles.surahItem}`} onClick={() => onSurahClick(index + 1)}>
                            <div className={`card-body ${styles.surahDetail}`}>
                                <div className="row">
                                    <div className={`col-2 ${styles.numberColumn}`}>
                                       <div> <p className={`card-text ${styles.number}`}>{surah.number}</p></div>
                                    </div>
                                    <div className={`col-10 ${styles.detailColumn}`}>
                                        <div className="row">
                                            <div className={`col-7 mb-3 mb-md-0 ${styles.firstDetail}`}> {/* Added spacing class */}
                                                <h5 className={`card-title`}>
                                                    {surah.name.transliteration.en}
                                                </h5>
                                                <p className={`card-text `}>
                                                    {surah.name.translation.en}
                                                </p>
                                            </div>
                                            <div className={`col-5 mb-3 mb-md-0 ${styles.secondDetail}`}>
                                            <p className={`card-text`}>
                                                    {surah.name.long}
                                                </p>
                                                <p className={`card-text`}>
                                                    {surah.numberOfVerses} ayahs
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SurahList;
