import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4000/api', // Replace with your backend URL
});

// Add token to requests if user is logged in
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
// Ideas
export const fetchIdeas = () => API.get('/ideas');
export const createIdea = (ideaData) => API.post('/ideas', ideaData);

// Votes
export const fetchVotes = () => API.get('/votes');
export const castVote = (voteData) => API.post('/votes', voteData);

// Rewards
export const fetchRewards = () => API.get('/rewards');

// Auth
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);
