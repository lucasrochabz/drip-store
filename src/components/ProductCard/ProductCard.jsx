import './ProductCard.css';

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card-item">
        <h2>{product.image}</h2>
        <span>{product.category}</span>
        <p>{product.name}</p>
        <span>{product.price}</span>
      </div>
    </>
  );
};
