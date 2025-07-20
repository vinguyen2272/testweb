import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Style from './style.module.css'

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return visible ? (
        <div className={Style.backToTop} onClick={scrollToTop}>
            <FaArrowUp size={20} />
        </div>
    ) : null;
};

export default BackToTop;
