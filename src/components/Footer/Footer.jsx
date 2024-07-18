import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer-container">
          <div className="slogan">
            <h2>Logo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
              suscipit debitis itaque quod aliquid.
            </p>
          </div>
          <div className="contato-container">
            <ul className="nav-list">
              <li className="header-list">Informações</li>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe Conosco</li>
              <li>Meus Pedidos</li>
            </ul>

            <ul className="nav-list">
              <li className="header-list">Categorias</li>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>

            <ul className="nav-list">
              <li className="header-list">Contato</li>
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - Ce,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
