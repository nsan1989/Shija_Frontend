export const API_URL = import.meta.env.VITE_API_URL;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// function to fetch api.
export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Accept: "application/json",
      ...options.headers,
    },
    ...options,
  });

  const text = await response.text();

  let body;

  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }

  if (!response.ok) {
    const message =
      typeof body === "object" && body?.detail
        ? body.detail
        : `Request failed (${response.status})`;

    throw new Error(message);
  }

  return body;
}

// function to get banner data.
export function getBannerData() {
  return apiFetch("sendbanner");
}

// banner base url.
export const BANNER_URL = `${BASE_URL}banner/`

// function to get banner file URL
export function getBannerUrl(filename) {
  return `${BANNER_URL}${filename}`;
}

// function to get coe data.
export function getCoeData() {
  return apiFetch("coeslide");
}

// coe base url.
export const COE_URL = `${BASE_URL}coe/`

// function to get banner file URL
export function getCoeUrl(filename) {
  return `${COE_URL}${filename}`;
}

// function to get service data.
export function getServiceData() {
  return apiFetch("serviceslide");
}

// service base url.
export const SERVICE_URL = `${BASE_URL}services/`

// function to get service file URL
export function getServiceUrl(filename) {
  return `${SERVICE_URL}${filename}`;
}