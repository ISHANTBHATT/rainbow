"use client";
import React from "react";
import HomeBanner from "./HomeBanner";
import Info from "./Info";
import Map from "./Map";
import Services from "./Services";
import MapContainer from "./MapContainer";
import dynamic from "next/dynamic";
import MapChart from "./map-chart";
import SwipeCards from "./SwipeCards";
import OfferAnimation from "./OfferAnimation";
import Testimonals from "./Testimonals";

// const MapChart = dynamic(() => import("./map-chart"), { ssr: false });
function HomePage() {
  return (
    <div>
      <HomeBanner />
      <Info />
      <Testimonals />
      <OfferAnimation />
      {/* <Map /> */}
      {/* <Services /> */}
      {/* <MapContainer /> */}
      <MapChart />

      {/* <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Animated World Map</h1>
        <MapContainer />
      </div> */}
    </div>
  );
}

export default HomePage;
