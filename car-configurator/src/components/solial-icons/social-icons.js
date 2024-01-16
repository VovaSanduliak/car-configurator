import "./social-icons.css";
import facebook_icon from "./facebook.png";
import instagram_icon from "./instagram.png";
import linkedin_icon from "./linkedin.png";
import twitter_icon from "./twitter.png";
import youtube_icon from "./youtube.png";

function SocialIcons () {
  return (
    <div className="socialIcons">
      <img src={facebook_icon} alt="facebook icon"/>
      <img src={instagram_icon} alt="instagram icon"/>
      <img src={linkedin_icon} alt="linkedin icon"/>
      <img src={twitter_icon} alt="twitter icon"/>
      <img src={youtube_icon} alt="youtube icon"/>
    </div>     
  );
}

export default SocialIcons;