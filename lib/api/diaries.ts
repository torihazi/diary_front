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

export const diaryInputSchema = z.object({
  title: z.string().min(1, "Required"),
  content: z.string().nullish(),
});

export type diaryInputSchemaType = z.infer<typeof diaryInputSchema>;

export const createDiary = async (
  data: diaryInputSchemaType
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

  const handleCreateDiary = async (data: diaryInputSchemaType) => {
    try {
      const newDiary = await createDiary(data);
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

  return { handleCreateDiary };
};

//
// update
//

export const updateDiary = async (
  id: Diary["id"],
  data: diaryInputSchemaType
): Promise<Diary> => {
  const updateData = { diary: { ...data } };
  return api.put(`/api/v1/diaries/${id}`, updateData);
};

export const useUpdateDiary = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const setSnackBarState = useSetRecoilState(snackbarAtom);
  const { mutate } = useSWRConfig();

  const handleUpdateDiary = async ({
    data,
    id,
  }: {
    data: diaryInputSchemaType;
    id: Diary["id"];
  }) => {
    try {
      const updatedDiary = await updateDiary(id, data);
      mutate("/api/v1/diaries");
      setSnackBarState(successState("更新が完了しました"));
      if (onSuccess) {
        onSuccess();
      }
      return updatedDiary;
    } catch (err) {
      setSnackBarState(errorState("更新が失敗しました"));
      if (onError) {
        onError();
      }
      throw err;
    }
  };

  return { handleUpdateDiary };
};

//
// delete
//

export const deleteDiary = ({ id }: { id: Diary["id"] }): Promise<Diary> => {
  return api.delete(`/api/v1/diaries/${id}`);
};

export const useDeleteDiary = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const setSnackBarState = useSetRecoilState(snackbarAtom);
  const { mutate } = useSWRConfig();

  const handleDeleteDiary = async ({ id }: { id: Diary["id"] }) => {
    try {
      const deletedDiary = await deleteDiary({ id });
      mutate("/api/v1/diaries");
      setSnackBarState(successState("削除に成功しました"));
      if (onSuccess) {
        onSuccess();
      }
      return deletedDiary;
    } catch (err) {
      setSnackBarState(errorState("削除に失敗しました"));
      if (onError) {
        onError();
      }
      throw err;
    }
  };

  return { handleDeleteDiary };
};
