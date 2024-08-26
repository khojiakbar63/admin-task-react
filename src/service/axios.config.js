import axios from "axios";


export const api = axios.create({
    baseURL: import.meta.env.VITE_AUTH_BASE_URL,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
  });


