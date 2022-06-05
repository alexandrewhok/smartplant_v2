

function addplant() {
    return (
      <div className="addplant">
        <div className="addplant-return">
        <a href="/">
           <img  alt="back" src="./images/arrow.png"
           width="31" height="39"/>
        </a>
        </div>
        <div className="addplant-header text-title">Nova planta</div>
        <div className="addplant-info"> 
              <div className="addplant-info-first text-label">Nome da planta</div>    
            <input className="addplant-info-field" type="text" placeholder="ex:Cacto" />             
        </div>
        

       </div>
    );
  }
  
  export default addplant;