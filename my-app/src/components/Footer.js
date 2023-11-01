import React from "react";
import "./FooterStyles.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Plot no.21 Housing scoiety</p>
              <p>Virar west Mumbai!</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaPhone>
              1234567890
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaMailBulk>
              rahuldevre830@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Us</h4>
          <p>This is me Rahul devre and i want to work as an React dveloper!</p>
          <div className="social">
            <FaGithubSquare
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaGithubSquare>
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaLinkedin>
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
