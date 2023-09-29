import { BARD_API_KEY, BARD_API_URL } from "@env";
import axios from "axios";

const POST = async (endpoint: string, body: any) => {
    try {
        const config = {
            method: 'POST',
            url: BARD_API_URL + endpoint,
            headers: {
                'content-type': 'application/json',
                'xApiKey': BARD_API_KEY
            },
            data: JSON.stringify(body)
        }
        const response = await axios(config)
        console.log(JSON.stringify(response.data));
        return response.data
    } catch (error: any) {
        console.log(error, 'error at global-api.ts');
        throw error
    }
}

export const fetchBardAiAnswer = async (body: FetchBardAiAnswerBody) => {
    return POST('/bard', body)
}