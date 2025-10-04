
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

