import styles from './Cars.module.css';

const Cars = () => {
  const cars = [
    { ano: 2020, modelo: 'Civic', cor: 'Preto', color: 'black'},
    { ano: 2021, modelo: 'Corolla', cor: 'Laranja', color: 'orange' },
    { ano: 2019, modelo: 'Fusca', cor: 'Azul', color: 'blue' }
  ];

  return (
    <div className={styles.carTableContainer}>
      <table className={styles.carTable}>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Modelo</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.ano}</td>
              <td>{car.modelo}</td>
              <td>{car.cor} <p style={{ 
                backgroundColor: car.color,
                padding: '3px',
                width: '60%',
                margin: 'auto',
                marginTop: '10px',
                textAlign: 'center'
                }}></p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cars;
