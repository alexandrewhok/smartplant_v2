import "../Styles/base.scss";

function cacto() {
  return (
    <div className="cacto">
      <div className="cacto-return">
      <a href="/home">
         <img  alt="back" src="./images/arrow.png"
         width="31" height="39"/>
      </a>
      </div>
      <div className="cacto-part1">
      <div className="cacto-part1-intro title-plant">Cacto</div>

      <div className="cacto-part1-info1">
          <div className="cacto-part1-info1-hum text-plant">
              Humidade do Solo
          </div>
          <div className="cacto-part1-info1-value text-value">
            21%
          </div>
          </div>
          <div className="cacto-part1-info2">
          <div className="cacto-part1-info2-luz text-plant">
              Intensidade da luz
              </div>
              <div className="cacto-part1-info2-value text-value">
            83%
          </div>
          </div>
      </div>
      <div className="cacto-depo">
        <div className="cacto-depo-intro text-label">Depósito de água</div>
        <div className="cacto-depo-info">
          <div className="cacto-depo-info-num text-value2">62%</div>
   
          <button className="cacto-depo-info-bt text-label" type="button" onclick="alert('Hello world!')">Regar planta!</button>
      
        </div>
        <div className="cacto-depo-msg text-label">De momento a sua planta encontra-se nas condições ideias!</div>
        </div>
    </div>
  );
}

export default cacto;
