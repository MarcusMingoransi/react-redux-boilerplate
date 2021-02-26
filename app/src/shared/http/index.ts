import axios from "axios"

export const get = async (url: string, params: any = {}): Promise<any> => {
    return axios.get(url, params)
}

export const post = async (url: string, params: any = {}): Promise<any> => {
    return await axios.post(url, params)
}
