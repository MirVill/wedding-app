import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
        <p>2022 Copyright, todos los derechos reservados</p>
        <p>Iconos creados por:</p>
        <div className={styles.iconsInfo}>
        <a
          href="https://www.flaticon.com/free-icons/church"
          title="church icons"
        >
          Church icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/cheers"
          title="cheers icons"
        >
          Cheers icons created by Made by Made - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/marriage-certificate"
          title="marriage-certificate icons"
        >
          Marriage-certificate icons created by Talha Dogar - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Footer;


