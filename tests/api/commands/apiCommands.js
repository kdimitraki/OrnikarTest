const axios = require('axios');
require('dotenv').config();

const baseURL = process.env.API_BASE_URL || 'https://insurance-api.ornikar.com';

const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: () => true
});

async function getVehicleSuggestions(licensePlate) {
  return http.get('/v2/vehicles/suggestions', {
    params: { licensePlate }
    
  });
}

async function getVehicleBrands() {
  return http.get('/v2/vehicles/brands');
}

async function getCommunes(zipCode) {
  return http.get(`/communes/${zipCode}`);
}

module.exports = {
  getVehicleSuggestions,
  getVehicleBrands,
  getCommunes
};
