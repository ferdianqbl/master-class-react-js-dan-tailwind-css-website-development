import React from "react";
import BrowseTheRoom from "../parts/BrowseTheRoom";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/JustArrived";

export default function HomePage(props) {
  document.title = "Spaceture | Home";
  return (
    <>
      <Header />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Footer />
    </>
  );
}
