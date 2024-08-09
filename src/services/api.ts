import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://apiadonis2023.orender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})