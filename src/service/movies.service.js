import api from '../config/axios.config';

const api_key = '6f26fd536dd6192ec8a57e94141f8b20';

export const popularMovies = () => {
    return api.get(`popular?api_key=${api_key}`)
}

export const getOutstandingMovies = () => {
    return api.get(`now_playing?api_key=${api_key}`)
}


