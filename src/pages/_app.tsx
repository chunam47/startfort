import "@assets/styles/globals.css";
import "@assets/styles/main.scss";
import "@assets/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
