import './App.css';
import fondo from './foto.jpg'; // Asegúrate de tener una imagen fondo.jpg en src/

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="overlay">
        <div className="card">
          <h1>Dulce Valeria Miguel Juan</h1>
          <h2> Universidad Tecnológica de Querétaro</h2>
          <h3> Materia: Desarrollo Web Int</h3>
          <p>IDGS11</p>

          <button className="cta-button" onClick={() => window.open('https://github.com/Valeria-Miguel/Evaluacion-U2', '_blank')}>
            Ver Repositorio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
