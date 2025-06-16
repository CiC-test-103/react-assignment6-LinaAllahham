import { useState, useRef, useEffect } from 'react';
import styles from './SocialShare.module.css';

const SocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles['social-share']} ref={dropdownRef}>
      <button 
        className={styles.btn}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <img src="/images/icon-share.svg" className={styles.arrow} alt="Share" />
      </button>

      {isOpen && (
        <div className={styles.tooltip}>
          <span>SHARE</span>
          <div className={styles.socialIcons}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src="/images/icon-facebook.svg" alt="Facebook" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src="/images/icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src="/images/icon-pinterest.svg" alt="Pinterest" />
            </a>
          </div>
          <div className={styles.tooltipArrow}></div>
        </div>
      )}
    </div>
  );
};

export default SocialShare;