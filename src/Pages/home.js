import "../Styles/base.scss";

function home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="text-title">As minhas plantas</div>
      </div>

      <div className="home-no-plants">
        <div className="text-label">
          Ainda não existem plantas no seu inventário! Adicione uma nova planta
          carregando no botão do canto superior direito do ecrã
        </div>
      </div>
    </div>
  );
}

export default home;
