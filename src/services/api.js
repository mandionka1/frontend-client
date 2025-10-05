/*// services/api.js
import axios from "axios";

// Créer une instance Axios avec l'URL de base de ton backend
const api = axios.create({
  baseURL: "http://localhost:5000/api", // modifie si ton backend est ailleurs
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour ajouter automatiquement le token si connecté
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fonctions réutilisables pour le front-end

// Produits
export const getAllProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);

// Catégories
export const getAllCategories = () => api.get("/categories");

// Authentification
export const registerUser = (userData) => api.post("/auth/register", userData);
export const loginUser = (credentials) => api.post("/auth/login", credentials);

// Commandes / Panier (plus tard)
export const createOrder = (orderData) => api.post("/orders", orderData);

// Export de l’instance pour les requêtes personnalisées si besoin
export default api;*/




// src/services/api.jsx
export const api = {
  get: async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  },

  post: async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  },

  // Ajoutez d'autres méthodes HTTP (PUT, DELETE) si nécessaire
};

