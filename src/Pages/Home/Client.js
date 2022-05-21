import React from "react";
import client1 from "../../images/client/c1.jpg";
import client2 from "../../images/client/c2.jpg";
import client3 from "../../images/client/c3.jpg";
import client4 from "../../images/client/c4.jpg";
import client5 from "../../images/client/c5.jpg";

const Client = () => {
  const clientImage = [client1, client2, client3, client4, client5];
  return (
    <div className="container-width">
      <h1 className="text-4xl text-secondary font-bold">Our Client</h1>
      <div className="my-20 grid lg:grid-cols-5 sm:grid-cols-2 gap-5">
        {clientImage.map((image, index) => (
          <div key={index} className="client border-2 hover:border-cyan-700">
            <div className="flex justify-center justify-items-center">
              <img src={image} alt="client" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
