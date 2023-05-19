import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialSection() {
  return (
    <div className="socials">
      <div className="icon_container">
        <FontAwesomeIcon icon={faFacebookF} size="lg" className="icon" />
      </div>
      <div className="icon_container">
        <FontAwesomeIcon icon={faTwitter} size="lg" className="icon" />
        {/* <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />  */}
      </div>
      <div className="icon_container">
        <FontAwesomeIcon icon={faInstagram} size="lg" className="icon" />
      </div>
    </div>
  );
}
