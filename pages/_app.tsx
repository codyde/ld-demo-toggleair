import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/nav";
import { TripsProvider } from "@/utils/contexts/TripContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TripsProvider>
        <NavBar />
        <Component {...pageProps} />
      </TripsProvider>
    </>
  );
}
