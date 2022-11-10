import styles from './CardItem.module.css'

const CardItem = ({ icon, data ,extra }) => {
  return (
    <div className={styles.cardContainer}>
        <div className={`${styles.card}, ${styles.cardFront}`}>
            <img src={icon} alt='icon'/>
            <h1 className={styles.title}>{data.title}</h1>
        </div>

        <div className={styles.cardBack}>
            <h3 className={styles.titleSmall}>{data.names}</h3>
            <p className={styles.text}>{data.info}</p>
            <p className={styles.text}>{data.number}</p>
            {extra}
        </div>
     </div>
  );
};

export default CardItem;

//https://mesaderegalos.liverpool.com.mx/milistaderegalos/50904544