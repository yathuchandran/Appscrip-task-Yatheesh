import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa"; 
import { useState } from "react"; 
import styles from './styles/card.module.css'; 

const Card = ({ data }: any) => {
  const [isLiked, setIsLiked] = useState(false); 

  const toggleLike = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <div className={`${styles.card} ${styles.cardMd}`}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={data.image} alt="productImage" />
      </div>
      <div className={`${styles.details} ${styles.detailsMd}`}>
        <h3 className={styles.title}>
          {data.title.split(' ').slice(0, 2).join(' ')}
        </h3>
      </div>
      <div className={styles.textSection}>
        <p className={styles.text}>
          <span className={styles.link}>Sign in</span> or Create an account to see pricing
        </p>
        <div onClick={toggleLike} className={styles.iconContainer}>
          {isLiked ? (
            <FaHeart className={`${styles.icon} ${styles.iconLiked}`} />
          ) : (
            <CiHeart className={`hidden md:${styles.iconMdShow} ${styles.icon}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
