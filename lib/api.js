
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://e-site-api.vercel.app";

const STORE_SLUG = "customsofa";

export async function fetchAPI(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// Get Products
export const getProducts = (params = {}) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, value);
    }
  });

  const queryString = query.toString();

  return fetchAPI(
    `/api/public/${STORE_SLUG}/products${queryString ? `?${queryString}` : ""}`
  );
};

// Get Categories
export const getCategories = () =>
  fetchAPI(`/api/public/${STORE_SLUG}/categories`);

// Get Materials
export const getMaterials = (group = "") => {
  const query = group
    ? `?group=${encodeURIComponent(group)}`
    : "";

  return fetchAPI(`/api/public/${STORE_SLUG}/materials${query}`);
};

// Get Store Branding
export const getStoreBranding = () =>
  fetchAPI(`/api/branding/public/${STORE_SLUG}`);

// Get Image URL
export function getImageUrl(imageId) {
  if (!imageId) return "/images/placeholder.webp";

  const id =
    typeof imageId === "object" && imageId !== null
      ? imageId.$oid || imageId.toString()
      : String(imageId);

  return `${API_BASE_URL}/api/images/${id}`;
}
