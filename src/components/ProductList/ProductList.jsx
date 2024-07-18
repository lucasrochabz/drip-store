import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  const products = [
    {
      name: 'Tênis Esportivo',
      image: 'Imagem1',
      category: 'Tênis',
      gender: 'Masculino',
      price: 'R$ 200,00',
    },
    {
      name: 'Sandália de Verão',
      image: 'Imagem2',
      category: 'Sandália',
      gender: 'Feminino',
      price: 'R$ 150,00',
    },
    {
      name: 'Chinelo Casual',
      image: 'Imagem3',
      category: 'Chinelo',
      gender: 'Unissex',
      price: 'R$ 50,00',
    },
    {
      name: 'Botas de Couro',
      image: 'Imagem4',
      category: 'Botas',
      gender: 'Feminino',
      price: 'R$ 300,00',
    },
    {
      name: 'Chuteira Profissional',
      image: 'Imagem5',
      category: 'Chuteira',
      gender: 'Masculino',
      price: 'R$ 250,00',
    },
    {
      name: 'Sapatênis Urbano',
      image: 'Imagem6',
      category: 'Sapatênis',
      gender: 'Masculino',
      price: 'R$ 180,00',
    },
    {
      name: 'Rasteirinha Estampada',
      image: 'Imagem7',
      category: 'Rasteirinha',
      gender: 'Feminino',
      price: 'R$ 120,00',
    },
    {
      name: 'Pantufa Confortável',
      image: 'Imagem8',
      category: 'Pantufa',
      gender: 'Unissex',
      price: 'R$ 80,00',
    },
  ];

  return (
    <>
      <section className="product-list-bg">
        <div className="list-header">
          <h2>Produtos em alta</h2>
          <a href="#">Ver todos</a>
        </div>

        <div className="product-list">
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </section>
    </>
  );
};
