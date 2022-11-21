import axios, { AxiosResponse } from "axios"
import { baseURL } from "../config/global"

export const getPosts = async<T, P = {}>(params?: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.get(`${baseURL}/post`, { params })

    return data;
}

export const create = async<T, P = {}>(params: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.post(`${baseURL}/post`, params)

    return data;
}

export const update = async<T, P = {}>(params: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.put(`${baseURL}/post`, params)
    return data;
}