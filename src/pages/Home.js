import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div class="content">
          <h1>David SARTORI</h1>
          <h2>Développeur Fullstack</h2>
          <div className="pdf">
            <a href="./media/cv.pdf" target="_blank">Télécharger</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
