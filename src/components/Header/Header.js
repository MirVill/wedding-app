import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.textContainer}>
        <h1 className={styles.text}>ITZEL & ADRIAN</h1>
      </header>
    </div>
  );
};

export default Header;