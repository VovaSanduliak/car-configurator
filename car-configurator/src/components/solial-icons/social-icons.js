import "./social-icons.css";
import facebook_icon from "./icons/facebook.png";
import instagram_icon from "./icons/instagram.png";
import linkedin_icon from "./icons/linkedin.png";
import twitter_icon from "./icons/twitter.png";
import youtube_icon from "./icons/youtube.png";

const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <img src={facebook_icon} alt="facebook icon" />
      <img src={instagram_icon} alt="instagram icon" />
      <img src={linkedin_icon} alt="linkedin icon" />
      <img src={twitter_icon} alt="twitter icon" />
      <img src={youtube_icon} alt="youtube icon" />
    </div>
  );
};

export default SocialIcons;
