import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Interêts</h3>
      <ul>
        <li>
          <i className="fas fa-running"></i>
          <span>Course à pieds</span>
        </li>
        <li>
          <i className="fas fa-anchor"></i>
          <span>Voile de plaisance</span>
        </li>
        <li>
          <i className="fas fa-parachute-box"></i>
          <span>Parapente</span>
        </li>
        <li>
          <i className="fab fa-bitcoin"></i>
          <span>Crypto-monnaies</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
