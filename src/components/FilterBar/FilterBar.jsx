import './FilterBar.css';

export const FilterBar = () => {
  const handleFilter = (event) => {
    event.preventDefault();
    console.log('clicou em Filtrar');
  };

  return (
    <>
      <section className="filter-bar-container">
        <h2>Filtrar por</h2>
        <span>Marca:</span>
        <form className="filter-form">
          <div>
            <input type="checkbox" id="adidas" />
            <label htmlFor="adidas">Adidas</label>
          </div>

          <div>
            <input type="checkbox" id="nike" />
            <label htmlFor="nike">Nike</label>
          </div>

          <div>
            <input type="checkbox" id="puma" />
            <label htmlFor="puma">Puma</label>
          </div>

          <button onClick={handleFilter}>Filtar</button>
        </form>
      </section>
    </>
  );
};
