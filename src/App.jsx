
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

