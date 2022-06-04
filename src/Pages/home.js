import "../Styles/base.scss";
import CardPlant from "./Components/CardPlant";

function home() {
  return (
    <div className="home">
      <div className="home-addbt">

        {/*MUDAR O HREF PARA ADICIONAR A PLANTA*/}
      <a href="/">
         <img  alt="add" src="images/add.png"
         width="31" height="39"/>
      </a>
      </div>
      <div className="home-header">
        <div className="text-title">As minhas plantas</div>
      </div>
{/*
      <div className="home-no-plants">
        <div className="text-label">
          Ainda não existem plantas no seu inventário! Adicione uma nova planta
          carregando no botão do canto superior direito do ecrã
        </div>
      </div>
  */}
  <div className="home-card">
    <CardPlant
    link="/cacto"
    image="images/plant1.png"
    name="Cacto"
    icon="images/icon2.png"/>
  </div>
    </div>
  );
}

export default home;
