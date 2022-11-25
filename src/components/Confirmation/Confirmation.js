import styles from './Confirmation.module.css'
import { Button } from '@mui/material';

const Confirmation = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}>¡Confirma tu asistencia!</h1>
        <p className={styles.info}><b>- No Niños -</b></p>
          <a
            href="https://docs.google.com/forms/d/1tKOTgxaSZSaQbojgcAXogHSsU2BZ5CFKlTxyNEWTByg/edit"
            title="ubicacion"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "#1d7878", margin: "20px 0", fontSize: "17px"}}
            >
              Confirmar asistencia
            </Button>
            </a>
            <p className={styles.text}> El mejor regalo es tu presencia. Si tu deseo es hacernos algún presente, te compartimos nuestras sugerencias:</p>
    </div>
}

export default Confirmation;