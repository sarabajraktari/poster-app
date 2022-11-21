import axios, { AxiosResponse } from "axios"
import { baseURL } from "@config"

export const createUser = async<T, P = {}>(params: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.post(`${baseURL}/users`, params)

    return data;
}

export const loginUser = async<T, P = {}>(params: P): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.get(`${baseURL}/users`, { params })
    return data;
}


export const getUserById = async<T>(id: string): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios.get(`${baseURL}/users/${id}`)
    return data;
}