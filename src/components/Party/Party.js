import styles from './Party.module.css'
import img from '../../assets/photos/foto.jpg'
import cheersIcon from '../../assets/icons/cheersGreen.png'
import civilWedding from '../../assets/icons/civilGreen.png'
import { Button } from '@mui/material'

const Party = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <img className={styles.icon} src={cheersIcon} alt="brindis" />
          <h1 className={styles.title}>Recepción</h1>
          <h2 className={styles.hour}> - 20:30 hrs -</h2>
          <p>Quinta Los Agapantos</p>
          <p>Camino a las Moras 1532, 45640 San Agustín, Jal.</p>
          <a
            href="https://waze.com/ul/h9ewkvr0re"
            title="ubicacion"
            target="_blank"
            rel="noreferrer"
            className={styles.btnVisible}
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "#1d7878", margin: "20px 0" }}
            >
              Ver Ubicación
            </Button>
          </a>
        </div>
        <img className={styles.photo} src={img} alt="Itzel & Adrian" />
        <div>
          <img className={styles.icon} src={civilWedding} alt="boda al civil" />
          <h1 className={styles.title}>Boda Civil</h1>
          <h2 className={styles.hour}> - 20:30 hrs -</h2>
          <p>Se celebrará el mismo lugar de la recepción: </p>
          <p>Quinta Los Agapantos</p>
          <a className={styles.btninvisible}
            href="https://waze.com/ul/h9ewkvr0re"
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
        </div>
      </div>
    </div>
  );
};

export default Party;

//https://waze.com/ul/h9ewkvr0re
//https://maps.app.goo.gl/fcvhaATyyzYbXDX49?g_st=iw