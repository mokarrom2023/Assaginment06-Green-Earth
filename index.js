const API = {
  categories: "https://openapi.programming-hero.com/api/categories",
  allPlants: "https://openapi.programming-hero.com/api/plants",
  byCategory: (id) => `https://openapi.programming-hero.com/api/category/${id}`,
  details: (id) => `https://openapi.programming-hero.com/api/plant/${id}`,
};

const elements = {
  categoryContainer: document.getElementById("category-container"),
  plantContainer: document.getElementById("plant-container"),
  spinner: document.getElementById("spinner"),
  emptyState: document.getElementById("empty-state"),
  cartList: document.getElementById("cart-list"),
  totalPriceEl: document.getElementById("total-price"),
  plantModal: document.getElementById("plant_modal"),
  modalBody: document.getElementById("modal-body"),
  donateForm: document.getElementById("donate-form"),
};

let cart = [];

const setLoading = (isLoading) => elements.spinner.classList.toggle("hidden", !isLoading);

const priceToNumber = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

function pickCategories(payload) {
  if (!payload) return [];
  return payload.data || payload.categories || [];
}

function pickPlants(payload) {
  if (!payload) return [];
  return payload.data || payload.plants || [];
}

function pickPlantDetail(payload) {
  if (!payload) return null;
  const data = payload.data || payload.plant;
  return Array.isArray(data) ? data[0] : data;
}

function getPlantId(p) {
  if (!p) return null;
  return p.id || p.plant_id || p._id || p.plantId || null;
}

function setActiveCategory(activeId) {
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.classList.remove("bg-green-700", "text-white");
    btn.classList.add("bg-transparent", "text-green-800");
  });

  const activeBtn = document.getElementById(activeId);
  if (activeBtn) {
    activeBtn.classList.add("bg-green-700", "text-white");
    activeBtn.classList.remove("bg-transparent", "text-green-800");
  }
}

