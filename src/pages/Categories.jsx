

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors du chargement des catégories");
        }
        return res.json();
      })
      .then((data) => {
        // Vérifier que `data` est un tableau
        const cats = Array.isArray(data) ? data : data.categories ?? [];  
        // Si data est de la forme { categories: [...] }, on prend data.categories
        setCategories(cats);
        setFilteredCategories(cats);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredCategories(categories);
    } else {
      // Garde de sécurité : vérifier que categories est un tableau avant filter
      if (Array.isArray(categories)) {
        const filtered = categories.filter((cat) =>
          String(cat.name).toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCategories(filtered);
      } else {
        setFilteredCategories([]);  // ou une valeur de repli
      }
    }
  }, [search, categories]);

  if (loading) {
    return <p className="text-center">Chargement des catégories...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Catégories</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher une catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {filteredCategories && filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Link
              key={category._id ?? category.id}
              to={`/produits/${category.slug}`}
              className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center text-xl font-semibold text-gray-800 hover:shadow-lg hover:text-blue-600 transition duration-300"
            >
              {category.name}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Aucune catégorie trouvée.</p>
      )}
    </div>
  );
};

export default Categories;










