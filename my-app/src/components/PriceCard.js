import React from "react";
import { Link } from "react-router-dom";
import "./PriceCrad.css";
const PriceCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> BASIC</h3>
          <span className="bar"></span>
          <p className="btc">$$$</p>
          <p>-- #3days--</p>
          <p>-- #3-Pages--</p>
          <p>-- #Styled Components--</p>
          <p>-- #Resposnive pages--</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3> Advance</h3>
          <span className="bar"></span>
          <p className="btc">$$$</p>
          <p>-- #7days--</p>
          <p>-- #5pages--</p>
          <p>-- #Styled Components--</p>
          <p>-- #Responsive Pges--</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3> Premium</h3>
          <span className="bar"></span>
          <p className="btc">$$$</p>
          <p>-- #30days--</p>
          <p>-- #Styled Components--</p>
          <p>-- #Resposnive pages--</p>
          <p>-- #15 pages--</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
