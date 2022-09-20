import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './footer.css'
const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="copyright">
                <p>&copy; 2022 Massil Technologies|Cookie Policy|Privacy Policy|Terms And Conditions</p>
                
            </div>
            <div>
                <BsFacebook className="social-media-icons" />
                <BsTwitter className="social-media-icons"/>
                <BsLinkedin className="social-media-icons"/>
                
            </div>
        </div>
    );
};

export default Footer;