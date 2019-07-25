import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/bio/2.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullets-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="address-card" />
            </div>
            <div className="text">(801) 856-4685</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">marteiwgc@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Orem, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
