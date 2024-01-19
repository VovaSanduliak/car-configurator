import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 NOT FOUND</h1>;
      <p>
        This page doesn't exist. Go{" "}
        <Link to="/" replace>
          home
        </Link>
      </p>
    </>
  );
};

export default NotFoundPage;
