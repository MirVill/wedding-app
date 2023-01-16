import Gallery from "../Gallery/Gallery";
import styles from "./MainPage.module.css";
import Date from "../Date/Date";
import Ceremony from "../Ceremony/Ceremony";
import Party from "../Party/Party";
import Confirmation from "../Confirmation/Confirmation";
import CardItem from "../Card/CardItem";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import Icon1 from "../../assets/icons/giftGreen.png";
import Icon2 from "../../assets/icons/piggy-bank.png";
import Message from "../Message/Message";
import Lodging from "../Lodging/Lodging";

const giftTable = {
  title: "Mesa de regalos",
  names: "ITZEL & ADRIAN",
  info: "Fecha del evento: 29/04/2023",
  number: "Número de evento: 50904544",
};

const bankData = {
  title: "Datos Bancarios",
  names: "Adrián Alejandro González Silva",
  info: "Banco: BBVA",
  number: "Número de cuenta: 1580527927",
};

const MainPage = () => {
  const extra = (
    <a
      href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50904544"
      title="ubicacion"
      target="_blank"
      rel="noreferrer"
    >
      <Button
        variant="text"
        color="inherit"
        sx={{ color: "#1d7878", margin: "5px 0" }}
      >
        Ir a la tienda
      </Button>
    </a>
  );
  const extra2 = <p style={{ margin: "2px" }}>CLABE: 012320015805279278</p>;

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.paragraph}>
          Nos conocimos de manera inesperada, hemos vivido momentos únicos y
          ahora es momento del «Sí, acepto»
        </p>
        <h1 className={styles.title}>¡Nos Casamos!</h1>
      </div>
      <Gallery />
      <Date />
      <Ceremony />
      <Party />
      <Confirmation />
      <div className={styles.cardsContainer}>
        <CardItem icon={Icon1} data={giftTable} extra={extra}></CardItem>
        <CardItem icon={Icon2} data={bankData} extra={extra2} />
      </div>
      <Lodging />
      <Message />
      <Footer />
    </div>
  );
};

export default MainPage;
