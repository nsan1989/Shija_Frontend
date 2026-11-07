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

// function to get awards and accolades data.
export function getAwardsAndAccoladesData() {
  return apiFetch("accolades");
}

// function to get news slides data.
export function getNewsSlidesData() {
  return apiFetch("newsslide");
}

// news slides base url.
export const NEWS_SLIDES_URL = `${BASE_URL}news/`

// function to get all news data.
export function getAllNewsData() {
  return apiFetch("newsall");
}

// all news base url.
export const ALL_NEWS_URL = `${BASE_URL}news/`

// function to get news details data.
export function getNewsDetailsData() {
  return apiFetch("newsdetails");
}

// news details base url.
export const NEWS_DETAILS_URL = `${BASE_URL}news/`

// function to get all events data.
export function getEventsData() {
  return apiFetch("eventsall");
}

// events base url.
export const EVENTS_URL = `${BASE_URL}events/`

// function to get all camps data.
export function getCampsData() {
  return apiFetch("campsall");
}

// camps base url.
export const CAMPS_URL = `${BASE_URL}camps/`

// function to get empanelled orgs data.
export function getEmpanelledOrgData() {
  return apiFetch("sendemporg");
}

// empanelled org base url.
export const EMP_ORG_URL = `${BASE_URL}empa/`

// function to get discover data.
export function getDiscoverData() {
  return apiFetch("landingone");
}

// discover base url.
export const DISCOVER_URL = `${BASE_URL}section/`

// function to get testimonial data.
export function getTestimonialData() {
  return apiFetch("sendtestimonial");
}

// testimonial base url.
export const TESTIMONIAL_URL = `${BASE_URL}testimonial/`