import companyLogo from "./bmw_logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <img src={companyLogo} alt="logo bmw" className="logo" />
    </div>
  );
};

export default Logo;
