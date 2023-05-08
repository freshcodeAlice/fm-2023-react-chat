const API_BASE = 'https://dummyjson.com'

export const getMessages = async () => {
    return fetch(`${API_BASE}/comments`).then(res => res.json())
}