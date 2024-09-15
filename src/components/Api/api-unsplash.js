import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesByTopic = async (topic, page = 0) => {
    const { data } = await axios.get('/search/photos', {
        params: {
            client_id: 'ICU4AI1zd47TsXHMy2ani5MZeRkVy7HN9EhewgSqsKI',
            query: topic,
            page,
            per_page: 12,
        },
    });

    return data;
};