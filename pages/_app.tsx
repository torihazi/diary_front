import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
