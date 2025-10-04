
// pages/Apropos.jsx
import React from "react";
import generated from '../assets/generated.jpg';

const Apropos = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <img
                src={generated}
                alt="Illustration de MbaShop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Since 2010</h3>
                <p className="mt-2">Plus de 10 ans d’expérience dans l’e-commerce</p>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-amber-900 mb-1">À propos de CorreaShop</h1>
            <p className="text-gray-700 mb-1">
              Bienvenue sur <strong>MbaShop</strong>, votre boutique en ligne de confiance
              pour les montres, parfums, chaussures, portables, casques et ordinateurs de marques renommées. Nous nous
              engageons à offrir des produits de qualité, à des prix compétitifs, avec un
              service client irréprochable.
            </p>
            <p className="text-gray-700 mb-1">
              Notre mission est de rendre le shopping en ligne simple, rapide et agréable.
              Grâce à notre plateforme, vous pouvez parcourir facilement nos collections,
              découvrir de nouveaux produits et finaliser vos achats en toute sécurité.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-1">Notre équipe</h2>
            <p className="text-gray-700 mb-1">
              MbaShop est dirigé par une équipe passionnée par la mode et les tendances.
              Nous travaillons chaque jour pour sélectionner les meilleurs produits et
              offrir une expérience utilisateur exceptionnelle.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-1">Notre engagement</h2>
            <p className="text-gray-700">
              Nous nous engageons à fournir un service client de qualité, des livraisons
              rapides et un suivi transparent de vos commandes. Votre satisfaction est
              notre priorité.
            </p>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <h4 className="font-semibold text-pink-600 text-xl">500+</h4>
            <p className="text-gray-600">Produits uniques</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <h4 className="font-semibold text-pink-600 text-xl">50+</h4>
            <p className="text-gray-600">Pays desservis</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <h4 className="font-semibold text-pink-600 text-xl">98%</h4>
            <p className="text-gray-600">
              Satisfaction client – Nos produits sont testés et approuvés avant chaque
              envoi.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
            <h4 className="font-semibold text-pink-600 text-xl">24/7</h4>
            <p className="text-gray-600">Support client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;

