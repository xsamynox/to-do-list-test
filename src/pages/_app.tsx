import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Roboto } from "next/font/google";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
