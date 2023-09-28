import { BARD_API_URL } from "@env";
import axios from "axios";

const POST = async (endpoint: string, body: any) => {
    const config = {
        method: 'POST',
        url: BARD_API_URL + endpoint,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(body)
    }
    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

export const fetchBardAiAnswer = (body: FetchBardAiAnswerBody) => {
    return POST('/bard', body)
}