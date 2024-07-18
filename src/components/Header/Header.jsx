import './Header.css';

export const Header = () => {
  return (
    <>
      <div>
        <header className="header-bg">
          <div className="header-container">
            <div className="top-section">
              <h2>Logo</h2>
              <input type="text" placeholder="Pesquisar produto..." />
              <a href="#">Cadastre-se</a>
              <a href="#">Entrar</a>
              <button>Carrinho</button>
            </div>
            <nav>
              <ul className="nav-bar">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Produtos</a>
                </li>
                <li>
                  <a href="#">Categorias</a>
                </li>
                <li>
                  <a href="#">Meus Pedidos</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
