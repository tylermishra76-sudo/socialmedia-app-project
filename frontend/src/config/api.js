const rawApiUrl = import.meta.env.VITE_API_URL?.trim()
const isBrowser = typeof window !== 'undefined'

export const API_URL = rawApiUrl
  ? rawApiUrl.replace(/\/+$/, '')
  : import.meta.env.DEV && isBrowser
    ? `http://${window.location.hostname}:3000`
    : ''

export function getApiUrl() {
  if (!API_URL) {
    throw new Error(
      'VITE_API_URL is missing. Set it to your deployed backend URL, then rebuild and redeploy the frontend.'
    )
  }

  return API_URL
}
