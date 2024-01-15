import companyLogo from "./logo.svg";

function Logo() {
  return(
    <img src={companyLogo} alt="logo audi" style={{width: 100 }}/>
  );
}

export default Logo;