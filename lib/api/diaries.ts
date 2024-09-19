import useSWR from "swr";
import { api } from "./axios";
import { Diary } from "@/types/type";

//
// index
//

const indexFetcherAndKey = () => {
  const key: string = "/api/v1/diaries";
  const fetcher = (key: string) => api.get(key);

  return { key, fetcher };
};

export const useDiaries = () => {
  const { key, fetcher } = indexFetcherAndKey();
  const { data, error, isLoading } = useSWR(key, fetcher);

  return {
    data: data?.data,
    error,
    isLoading,
  };
};

//
// show
//

const showFetherAndKey = (id: Diary["id"]) => {
  const key: string = `/api/v1/diaries/${id}`;
  const fetcher = (key: string) => api.get(key);

  return { key, fetcher };
};

export const useDiary = (id: Diary["id"]) => {
  const { key, fetcher } = showFetherAndKey(id);
  const { data, error, isLoading } = useSWR(key, fetcher);

  return {
    data: data?.data,
    error,
    isLoading,
  };
};
