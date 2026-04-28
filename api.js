// API utility — all fetch calls go through here
const BASE = '/api'

async function get(path) {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`API ${path} → ${res.status}`)
  return res.json()
}

export const api = {
  getCountries: () => get('/countries/'),
  getCountry: (id) => get(`/countries/${id}`),
  getLayer: (id, layer) => get(`/countries/${id}/layer/${layer}`),
  compare: (a, b) => get(`/comparison/${a}/${b}`),
  getSongs: () => get('/music/'),
  health: () => get('/health'),
}
