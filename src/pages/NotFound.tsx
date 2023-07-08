import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container py-5 not_found">
      <div>
        <h1> 4O4 </h1>
        <Link to='/' className="primary_button"> Go to home </Link>
      </div>
    </div>
  );
};

export default NotFound;
