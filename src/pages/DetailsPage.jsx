import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function DetailsPage(props) {
  document.title = "Spaceture | Details";
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/9191", name: "Office Room" },
          { url: "/categories/9191/products/11212", name: "Details" },
        ]}
      />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
