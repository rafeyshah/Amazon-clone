import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="12345"
          title="TCL 65-inch 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65S535, 2021 Model"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/91tMNAWWsPL._AC_UL320_.jpg"
        />
        <Product
          id="88888"
          title="Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit"
          price={842}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6666"
          title="ASUS Laptop 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65S535, 2021 Model"
          price={32}
          rating={5}
          image="https://m.media-amazon.com/images/I/810BY5U9baL._AC_UL320_.jpg"
        />
        <Product
          id="532"
          title="TCL 65-inch 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65S535, 2021 Model"
          price={14.62}
          rating={5}
          image="https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UL320_.jpg"
        />
        <Product
          id="3245"
          title="Xbox Wireless Controller, TCL 65-inch 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65S535, 2021 Model"
          price={113}
          rating={4}
          image="https://m.media-amazon.com/images/I/51v0T9+NgdL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="123543545"
          title="Nintendo Switch Lite, TCL 65-inch 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65S535, 2021 Model"
          price={400}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51J7CMwivDL._AC_SY220_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
