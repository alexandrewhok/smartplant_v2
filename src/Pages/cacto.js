import "../Styles/base.scss";

function cacto() {
  return (
    <div className="cacto">
      <div className="cacto-return">
      <a href="/">
         <img  alt="back" src="./images/arrow.png"
         width="31" height="39"/>
      </a>
      </div>
      <div classname="cacto-name text-title">Cacto </div>
      <div className="cacto-info1">
          <div className="cacto-info1-hum text-label">
              Humidade do Solo
          </div>
          <div className="cacto-info2-luz text-label">
              Intensidade da luz
              </div>
      </div>
    </div>
  );
}

export default cacto;
