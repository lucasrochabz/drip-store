import { FilterBar } from '../../components/FilterBar/FilterBar';
import { Header } from '../../components/Header/Header';
import { InfoBar } from '../../components/InfoBar/InfoBar';
import { ProductList } from '../../components/ProductList/ProductList';
import './Products.css';

export const Products = () => {
  return (
    <>
      <Header />
      <InfoBar />
      <FilterBar />
    </>
  );
};
