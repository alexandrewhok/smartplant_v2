import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



function addplant() {
  const options = [
     'Cacto', 'Orquídea', 'Monstera'
  ];
  const defaultOption = options[0];

    return (
      <div className="addplant">
        <div className="addplant-return">
        <a href="/home">
           <img  alt="back" src="./images/arrow.png"
           width="31" height="39"/>
        </a>
        </div>
        <div className="addplant-header text-title">Nova planta</div>
        <div className="addplant-info"> 
              <div className="addplant-info-first text-label">Nome da planta</div>    
            <input className="addplant-info-field" type="text" placeholder="ex:Cacto" />             
        </div>
        <div className='addplant-select text-label'>Selecione o tipo de planta</div>
        <div className="addplant-drop text-label"> 
<Dropdown options={options} value={defaultOption} placeholder="Select an option" />
</div>
    <a  href="/home" className="button text-label">Adicionar Planta</a>
       </div>
    );
  }
  
  export default addplant;