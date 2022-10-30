import axios, { AxiosResponse } from "axios"
import { baseURL } from "../config/global"

export const getPosts = async<T, P = {}>(params?: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.get(`${baseURL}/post`, { params, })

    return data
}