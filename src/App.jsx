
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Utilisateur from "./components/Utilisateur";


export default function App() {
  return (
    <div className="layout" id="top">
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />  {/* ici toutes tes pages enfants seront rendues */}
      </main>
      <Utilisateur />
      <Footer />
    </div>
  );
}



/*import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductCard from './components/ProductCard';
import Utilisateur from './components/Utilisateur';
import Footer from './components/Footer';

const App = () => {
  const products = [
    { name: 'Produit 1', image: 'image1.jpg', description: 'Description 1', price: 1000 },
    { name: 'Produit 2', image: 'image2.jpg', description: 'Description 2', price: 2000 },
  ];

  const users = [
    { name: 'Utilisateur 1', avatar: 'avatar1.jpg', bio: 'Bio 1' },
    { name: 'Utilisateur 2', avatar: 'avatar2.jpg', bio: 'Bio 2' },
  ];

  const carouselItems = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  return (
    <div>
      <Header />
      <Carousel items={carouselItems} />
      <div className="products">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="users">
        {users.map((user, index) => (
          <Utilisateur key={index} user={user} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;*/







