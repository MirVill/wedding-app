import styles from './Date.module.css';
import image from '../../assets/photos/anillos.jpg'
import image1 from '../../assets/icons/dressCode.png'

const Date = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Save the date!</h1>
        <h2>- 29 de Abril del 2023 -</h2>
        <p>19:00hrs - Santa Anita, Jalisco</p>
        <img className={styles.icon} src={image1} alt="compromiso" />
        <p className={styles.dressCode}>
          DRESS CODE
          <br/>
            <span className={styles.dressCodeDescription}> Riguroso formal</span>
        </p>
      </div>
      <img className={styles.img} src={image} alt="compromiso" />
    </div>
  );
};

export default Date;