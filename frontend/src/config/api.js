const rawApiUrl = import.meta.env.VITE_API_URL?.trim()
const isLocalHost =
  typeof window !== 'undefined' &&
  ['localhost', '127.0.0.1'].includes(window.location.hostname)

export const API_URL = rawApiUrl
  ? rawApiUrl.replace(/\/+$/, '')
  : isLocalHost
    ? 'http://localhost:3000'
    : ''

export function getApiUrl() {
  if (!API_URL) {
    throw new Error(
      'VITE_API_URL is missing. Set it to your deployed backend URL, then rebuild and redeploy the frontend.'
    )
  }

  return API_URL
}
