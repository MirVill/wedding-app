import styles from './Lodging.module.css'
import { Button, Paper } from '@mui/material';

const Lodging = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}>Opciones de hospedaje</h1>
        <div className={styles.cardsContainer}>
        <Paper sx={{padding: 3, margin: 2 }}>
            <h2 className={styles.subtitle}>Hotel City Express plus</h2>
            <p>Dirección: Av. Adolfo Lopez Mateos Sur 1450, Plaza las Villas, Tlajomulco de Zuñiga, Jal.</p>
            <p>Reservaciones: 33 8000 0770</p>
            <p>Código: BODITYAD</p>
            <a
            href="https://waze.com/ul/h9ewmnh192"
            title="ubicacion"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "#1d7878", margin: "20px 0" }}
            >
              Ver Ubicación
            </Button>
          </a>
        </Paper>
        <Paper sx={{padding: 3, margin: 2 }} >
            <h2 className={styles.subtitle}>Microtel by Wyndham</h2>
            <p>Dirección: Av. López Mateos Sur 1710, Plaza la Gourmetería, Tlajomulco de Zúñiga</p>
            <p>Reservaciones: 33 3830 6324</p>
            <p>Código: 042723BOD</p>
            <a
            href="https://waze.com/ul/h9ewmn5873"
            title="ubicacion"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "#1d7878", margin: "20px 0" }}
            >
              Ver Ubicación
            </Button>
          </a>
        </Paper>
        </div>
    </div>
}

export default Lodging;