import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

// リクエストを送る前の処理
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // サーバ側にブラウザが受け取れるデータ形式を設定
  config.headers.set("Accept", "application/json");

  // Authorizationの項目に値が入っていなかった場合、設定
  if (!config.headers.has("Authorization")) {
    config.headers.set("Authorization", Cookies.get("token"));
  }
  return config;
});

// レスポンスを受け取った後の処理
api.interceptors.response.use(
  // HTTPコードが2xxの時
  (response) => {
    console.log(response);

    return response;
  },
  // HTTPコードが2xx以外の時
  (error) => {
    console.log(error);
    return error;
  }
);
