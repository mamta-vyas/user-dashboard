import { FormProvider } from "@/context/FormContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <FormProvider>
   <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Toaster />
      <Component {...pageProps} />
    </div>
    </FormProvider>
  );

}
