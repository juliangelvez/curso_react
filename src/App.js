import imagen0 from './img/rey_atanagildo.png';
import imagen1 from './img/rey_leogivildo.png';
import imagen2 from './img/rey_sisebuto.png';
import './App.css';
import './miCss.css';


function App() {
  let nombres = ["Atanagildo","Leovigildo","Sistebuto"]
  
  return (
    <div className="contenedor">
      <div className='caja'>
        <img src={imagen0} alt="" />
        <div className='nombre'> {nombres[0]} </div>
      </div>
      <div className='caja'>
        <img src={imagen1} alt="" />
        <div className='nombre'> {nombres[1]} </div>
      </div>
      <div className='caja'>
        <img src={imagen2} alt="" />
        <div className='nombre'> {nombres[2]} </div>
      </div>
    </div>
  );
}

export default App;
