import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/Player.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing Font Awesome

const Player = ({ AyahsAudios, AyahsText, Ayahstranslation, selectedSurah }) => {
    const [ayahIndex, setAyahIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const changeAyah = (index) => {
        if (AyahsAudios.length > 0 && index < AyahsAudios.length) {
            audioRef.current.src = AyahsAudios[index];
            document.querySelector('.ayah').innerText = AyahsText[index];
            document.querySelector('.ayah2').innerText = Ayahstranslation[index];
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            const handleEnded = () => {
                setAyahIndex((prevIndex) => (prevIndex < AyahsAudios.length - 1 ? prevIndex + 1 : 0));
            };
            audioRef.current.addEventListener('ended', handleEnded);
            return () => {
                if (audioRef.current) { // Check if audioRef.current is not null
                    audioRef.current.removeEventListener('ended', handleEnded);
                }
            };
        }
    }, [AyahsAudios.length]);
    useEffect(() => {
        if (AyahsAudios.length > 0) {
            changeAyah(ayahIndex);
        }
    }, [ayahIndex, AyahsAudios]);

    useEffect(() => {
        if (selectedSurah !== null) {
            setAyahIndex(0);
            if (audioRef.current) {
                audioRef.current.pause();
                setIsPlaying(false);
                changeAyah(0);
            }
        }
    }, [selectedSurah]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className={styles.player}>
            <div className={`ayah ${styles.tilawat}`}>تلاوت سننے کیلئے سورت پر کلک کریں</div>
            <div className={`ayah2 ${styles.translation}`}>English translation will be shown here</div>
            <audio ref={audioRef} className="quranPlayer" controls />
            <div className={styles.buttons}>
                <div className={`${styles.icons} prev`} onClick={() => setAyahIndex((prevIndex) => Math.max(prevIndex - 1, 0))}>
                    <i className="fas fa-backward"></i>
                </div>
                <div className={`${styles.icons} play`} onClick={togglePlay}>
                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
                </div>
                <div className={`${styles.icons} next`} onClick={() => setAyahIndex((prevIndex) => Math.min(prevIndex + 1, AyahsAudios.length - 1))}>
                    <i className="fas fa-forward"></i>
                </div>
            </div>
        </div>
    );
};

export default Player;
