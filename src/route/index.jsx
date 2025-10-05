
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Accueil from '../pages/Accueil';
import Apropos from '../pages/Apropos';
import Produits from '../pages/Produits';
import Categories from '../pages/Categories';
import Panier from '../pages/Panier';
import Contact from '../pages/Contact';
import Inscription from '../pages/Inscription';
import Connexion from '../pages/Connexion';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Accueil /> },
      { path: 'apropos', element: <Apropos /> },
      { path: 'produits', element: <Produits /> },
      { path: 'categories', element: <Categories /> },
      { path: 'panier', element: <Panier /> },
      { path: 'contact', element: <Contact /> },
      { path: 'inscription', element: <Inscription /> },
      { path: 'connexion', element: <Connexion /> }
    ]
  }
]);

export default router;




/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Apropos from '../pages/Apropos';
import Categories from '../pages/Categories';
import Checkout from '../pages/Checkout';
import Connexion from '../pages/Connexion';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import Inscription from '../pages/Inscription';
//import Panier from './Accueil/pages/Panier';
import Panier from '../pages/Panier';
import Produits from '../pages/Produits';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/


