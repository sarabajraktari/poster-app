import axios, { AxiosResponse } from "axios"
import { baseURL } from "config/global"

export const createUser = async<T, P = {}>(params: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.post(`${baseURL}/user`, params)

    return data;
}

export const loginUser = async<T, P = {}>(params: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.get(`${baseURL}/user/`, { params });
    return data;
}

