import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Breadcrumb({ list }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Office Room</Link>
          </li>
          <li>
            <Link to="/details" aria-label="current-page">
              Details
            </Link>
          </li> */}

          {list?.map?.((item, index) => {
            // const arias =
            //   index === list?.length - 1 ? "arial-label = current-page" : "";
            return (
              <li key={item.url}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};
