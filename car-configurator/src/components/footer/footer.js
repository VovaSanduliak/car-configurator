import "./footer.css";
import SocialIcons from "../solial-icons/social-icons";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
        margin: "2em auto",
      }}
    >
      <div style={{ width: "50%", fontSize: "1.5em" }}>
        <p>&copy; BMW</p>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
