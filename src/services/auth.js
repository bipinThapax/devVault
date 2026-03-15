const API_URI = 'https://devvault-backend-6vdp.onrender.com/api/auth';

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URI}/register`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(userData)
    })
    return response.json();
}

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URI}/login`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(credentials)
    })

    return response.json();
}