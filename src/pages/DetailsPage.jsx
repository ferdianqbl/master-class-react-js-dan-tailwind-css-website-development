import React from "react";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function DetailsPage(props) {
  document.title = "Spaceture | Details";
  return (
    <>
      <Header />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
