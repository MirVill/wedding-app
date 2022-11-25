import image1 from "../../assets/photos/img1.jpg"
import image2 from "../../assets/photos/top1.jpg"
import image3 from "../../assets/photos/top2.jpg"
import image4 from "../../assets/photos/top3.png"
import styles from "./Gallery.module.css"


const Gallery = () => {
    return <div className={styles.container}>
        <img className={styles.img} src={image2} alt="Itzel & Adrian"/>
        <img className={styles.img} src={image1} alt="Itzel & Adrian"/>
        <img className={styles.img} src={image3} alt="Itzel & Adrian"/>
        <img className={styles.img} src={image4} alt="Itzel & Adrian"/>
    </div>
};

export default Gallery;