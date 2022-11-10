import styles from './Ceremony.module.css'
import church from '../../assets/icons/church1.png'
import { Button } from '@mui/material';

const Ceremony = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ceremonia</h1>
      <p className={styles.church}>Capilla La Sagrada Familia Bosques de Santa Anita</p>
      <div className={styles.info}>
      <img className={styles.churchIcon} src={church} alt="Iglesia" />
        <div className={styles.dataContainer}>
            <h2>- 19:00 Horas -</h2>
          <p>
            <b>Dirección:</b> Cto Pradera, Cto Lomas Altas 55A, Bosques de Santa Anita,
            Fraccionamiento Bosques Santa Anita, Jal.
          </p>
          <a href='https://waze.com/ul/h9ewmj1fx0' title='ubicacion' target="_blank" rel="noreferrer">
          <Button variant="contained" color='inherit' sx={{color: '#1d7878', margin: '20px 0'}}>Ver Ubicación</Button>
          </a>
          <p> 
           <b>Consideraciones:</b>  La capilla se encuentra dentro de un condominio en
            el que tendras que registrar tu entrada. Te pedimos tomes el tiempo
            suficiente para que así podamos comenzar de manera puntual{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ceremony;

//19:00 HORAS en la Capilla La Sagrada Familia Bosques de Santa Anita
//Dirección: Cto Pradera, Cto Lomas Altas 55A, Bosques de Santa Anita, Fraccionamiento Bosques Santa Anita, Jal.
//Ubicación: https://waze.com/ul/h9ewmj1fx0
//Consideraciones: La capilla se encuentra dentro de un condominio, te pedimos tomes el tiempo suficiente por que deberás registrar tu entrada al mismo, para que así podamos comenzar de manera puntual
//autor icon: <a href="https://www.flaticon.com/free-icons/church" title="church icons">Church icons created by Freepik - Flaticon</a>