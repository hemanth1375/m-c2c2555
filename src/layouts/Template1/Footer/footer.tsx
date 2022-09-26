import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './Footer.css';
const Footer = () => {
  return (
      <div className="container-fluid footer-bg">
        <div className="row">
          <div className="col-sm-12 col-md-8 text-sm-center text-md-left">
            <p>
              &copy; 2022 Massil Technologies | Cookie Policy | Privacy Policy | Terms And
              Conditions
            </p>
        </div>
        <div className="col-sm-12 col-md-4 text-md-right text-sm-center">
          
            <BsFacebook className="social-media-icons" />
            <BsTwitter className="social-media-icons" />
            <BsLinkedin className="social-media-icons" />
            
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
