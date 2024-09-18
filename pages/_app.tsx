import { Snackbars } from "@/features/snackbars/components/snackbar";
import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <RecoilRoot>
        <Component {...pageProps} />
        <Snackbars />
      </RecoilRoot>
    </AppCacheProvider>
  );
}
