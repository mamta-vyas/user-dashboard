import { FormProvider } from "@/context/FormContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

  return (
      <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
      <FormProvider>
   <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Toaster />
      <Component {...pageProps} />
    </div>
    </FormProvider>
       </motion.div>
    </AnimatePresence>
  );

}
