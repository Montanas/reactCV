import React from "react";
import Navigation from "../components/Navigation";
// import {CopyToClipboard} from 'copy-to-clipboard';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
              <h1>Contactez-moi</h1>
              <ul>
                  <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Marange</span>
                  </li>
                  <li>
                      <i className="fas fa-mobile-alt"></i>
                      <i text="0648625427">
                          <span className="clickInput">06 48 62 54 27</span>
                      </i>
                  </li>
                  <li>
                      <i className="fas fa-enveloppe"></i>
                      <i text="0648625427">
                          <span className="clickInput">contact@digicomm.fr</span>
                      </i>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
