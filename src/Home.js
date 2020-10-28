import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src={require("./logo/HomeBanner.jpg")}
          className="home__Image"
          alt="homebanner"
        />

        <div className="home__row">
          <Product
            id="0123456"
            title="The organic cotton buds"
            price={200}
            image={require("./logo/cottonbuds.jpg")}
            rating={5}
          />
          <Product
            id="0123457"
            title="This product from Asheen outique is made from high end silk and perfectly machine crafted"
            price={10000}
            image={require("./logo/asheen1.PNG")}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="0123458"
            title="This product is hand crafted and is made from pure cotton"
            price={2000}
            image={require("./logo/asheen2.PNG")}
            rating={5}
          />
          <Product
            id="0123459"
            title="This product is again gorgeous and with very minimal price"
            price={20000}
            image={require("./logo/asheen3.PNG")}
            rating={3}
          />
          <Product
            id="0123451"
            title="Please do buy this for free"
            price={20000}
            image={require("./logo/asheen4.PNG")}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="0123452"
            title="This one is the costliest product"
            price={100000}
            image={require("./logo/asheen5.PNG")}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
