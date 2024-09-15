import axios from "axios";
import { ApiResponse } from "../App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesByTopic = async (topic: string, page = 0): Promise<ApiResponse> => {
    const { data } = await axios.get<ApiResponse>('/search/photos', {
        params: {
            client_id: 'ICU4AI1zd47TsXHMy2ani5MZeRkVy7HN9EhewgSqsKI',
            query: topic,
            page,
            per_page: 12,
        },
    });

    return data;
};