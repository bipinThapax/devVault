const API_URL = "https://devvault-backend-6vdp.onrender.com/api/projects";

export const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
    }
}

export const getAllProjects = async () => {
    const response = await fetch(API_URL, {
        headers: getAuthHeaders()
    });
    return response.json();
}

export const createProject = async (projectData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(projectData)
    })
    return response.json();
}

export const deleteProject = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
    })
    return response.json();
}

export const getProjectById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        headers: getAuthHeaders()
    })
    return response.json();
}

export const updateProject = async (id, projectData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(projectData)
    });
    return response.json();
}