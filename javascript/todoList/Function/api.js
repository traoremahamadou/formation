  /**
 * Récupère du JSON depuis une URL
 * @param {string} url 
 * @param {RequestInit} options 
 */
export async function fetchJSON (url, options = {}) {
    const headers = { Accept: 'application/json', ...options.headers }
    const res = await fetch(url, { ...options, headers })
    if (res.ok) {
        return res.json()
    }
    throw new Error('Erreur serveur', { cause: res })
}