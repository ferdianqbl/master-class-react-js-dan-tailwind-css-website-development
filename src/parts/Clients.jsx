import React from "react";

export default function Clients() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src="/images/logo-adobe.svg" alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src="/images/logo-ikea.svg" alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src="/images/logo-hermanmiller.svg" alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src="/images/logo-miele.svg" alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
