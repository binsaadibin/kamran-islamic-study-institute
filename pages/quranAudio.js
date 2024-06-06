import React, { useState, useEffect } from 'react'; // Import React
import Player from '../components/Player';
import SurahList from '../components/SurahList';
import Layout from '../components/headerAndFooter/Layout';
import styles from '@/styles/pages/quranAudio.module.scss';

// Define the component as a function component
export default function QuranAudio() { // Changed component name to start with an uppercase letter
    const [surahs, setSurahs] = useState([]);
    const [AyahsAudios, setAyahsAudios] = useState([]);
    const [AyahsText, setAyahsText] = useState([]);
    const [Ayahstranslation, setAyahstranslation] = useState([]);
    const [selectedSurah, setSelectedSurah] = useState(null);

    useEffect(() => {
        fetch('https://api.quran.gading.dev/surah')
            .then((response) => response.json())
            .then((data) => setSurahs(data.data));
    }, []);

    const handleSurahClick = (surahNumber) => {
        fetch(`https://api.quran.gading.dev/surah/${surahNumber}`)
            .then((response) => response.json())
            .then((data) => {
                const verses = data.data.verses;
                const audios = verses.map((verse) => verse.audio.primary);
                const texts = verses.map((verse) => verse.text.arab);
                const translations = verses.map((verse) => verse.translation.en);
                setAyahsAudios(audios);
                setAyahsText(texts);
                setAyahstranslation(translations);
                setSelectedSurah(surahNumber);
            })
            .catch((error) => {
                console.error('Error fetching surah data:', error);
            });
    };

    return (
        <Layout>
            <div className={styles.container}>
                <Player AyahsAudios={AyahsAudios} AyahsText={AyahsText} Ayahstranslation={Ayahstranslation} selectedSurah={selectedSurah} />
                <SurahList surahs={surahs} onSurahClick={handleSurahClick} />
            </div>
        </Layout>
    );
}
