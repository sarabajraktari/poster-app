import axios, { AxiosResponse } from "axios";
import { baseURL } from "@config";

export const getPosts = async <T, P = {}>(params?: P): Promise<T> => {
  const { data }: AxiosResponse<T> = await axios.get(`${baseURL}/post`, {
    params,
  });

  return data;
};

export const create = async <T, P = {}>(params: P): Promise<T> => {
  const { data }: AxiosResponse<T> = await axios.post(
    `${baseURL}/post`,
    params
  );

  return data;
};

export const update = async <T, P = {}>(id: string, params: P): Promise<T> => {
  const { data }: AxiosResponse<T> = await axios.put(
    `${baseURL}/post/${id}`,
    params
  );
  return data;
};

export const deletePost = async <T>(id: string): Promise<T> => {
  const { data }: AxiosResponse<T> = await axios.delete(`${baseURL}/post/${id}`)
  return data;
}
