import styles from './Confirmation.module.css'
import { Button } from '@mui/material';

const Confirmation = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}>¡Confirma tu asistencia!</h1>
        <p><b>- No Niños -</b></p>
          <a
            href="https://docs.google.com/forms/d/1tKOTgxaSZSaQbojgcAXogHSsU2BZ5CFKlTxyNEWTByg/edit"
            title="ubicacion"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "#1d7878", margin: "20px 0" }}
            >
              Confirmar asistencia
            </Button>
            </a>
            <p className={styles.text}> Si hay algo que queremos en nuestra boda, es compartir con nuestros amigos y familiares un evento tan especial para nosotros como lo es la unión de nuestro amor. 
                Nos hace inmensamente felices que puedas acompañarnos, así que más que cualquier cosa estamos agradecidos por tu presencia.</p>
    </div>
}

export default Confirmation;