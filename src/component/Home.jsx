import { Link } from "react-router-dom";
import "../style.css";

const Home = () => {
  return (
    <div className="home">
      <h1>welcome</h1>
      <nav>
        <Link className="link" to="/login">Login Page</Link>
        <Link className="link" to="/signup">Signup Page</Link>
      </nav>
    </div>
  );
};

export default Home;
