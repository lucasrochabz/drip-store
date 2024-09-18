import './InfoBar.css';

export const InfoBar = () => {
  return (
    <>
      <section className="info-bar-container">
        <div className="info-results">
          <p>Resultado para "Tênis" - 389 produtos</p>
        </div>
        <div className="info-order">
          <p>Ordenar por: mais relevantes</p>
        </div>
      </section>
    </>
  );
};
