import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
};
