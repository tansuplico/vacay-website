import React from "react";
import { useLocation } from "react-router-dom";

import { Navbar, Footer } from "../components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Lists } from "../components";

export default function Hotels() {
  const hotelClient = new QueryClient({});

  const { state } = useLocation();

  // Access the data passed from the Link component
  const bannerLocation = state && state.location;
  const bannerGuests = state && state.guests;

  console.log(bannerLocation, bannerGuests);

  return (
    <>
      <QueryClientProvider client={hotelClient}>
        <Navbar />
        <Lists
          country={!state ? null : state.country}
          location={bannerLocation}
          guests={bannerGuests}
        />
        <Footer />
      </QueryClientProvider>
    </>
  );
}
