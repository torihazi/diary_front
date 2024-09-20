import useSWR, { useSWRConfig } from "swr";
import { api } from "./axios";
import { Diary } from "@/types/type";
import { z } from "zod";
import { useSetRecoilState } from "recoil";
import { errorState, snackbarAtom, successState } from "./recoil/snackbarAtom";

//
// index
//

const getDiaries = (): Promise<{ data: Diary[] }> => {
  return api.get("/api/v1/diaries");
};

const indexFetcherAndKey = () => {
  const key: string = "/api/v1/diaries";
  const fetcher = () => getDiaries();

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

const getDiary = (id: Diary["id"]): Promise<{ data: Diary }> => {
  return api.get(`/api/v1/diaries/${id}`);
};

const showFetherAndKey = (id: Diary["id"]) => {
  const key: string = `/api/v1/diaries/${id}`;
  const fetcher = () => getDiary(id);

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

//
// create
//

export const createInputScheema = z.object({
  title: z.string().min(1, "Required"),
  content: z.string().nullish(),
});

export type createInputSchemaType = z.infer<typeof createInputScheema>;

export const postNewDiaryInput = async (
  data: createInputSchemaType
): Promise<Diary> => {
  const newData = { diary: { ...data } };
  return api.post("/api/v1/diaries", newData);
};

export const useCreateDiary = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const setSnackBarState = useSetRecoilState(snackbarAtom);
  const { mutate } = useSWRConfig();

  const createDiary = async (data: createInputSchemaType) => {
    try {
      const newDiary = await postNewDiaryInput(data);
      mutate("/api/v1/diaries");
      setSnackBarState(successState("作成しました"));
      if (onSuccess) {
        onSuccess();
      }
      return newDiary;
    } catch (err) {
      setSnackBarState(errorState("エラー"));
      if (onError) {
        onError();
      }
      throw err;
    }
  };

  return { createDiary };
};
