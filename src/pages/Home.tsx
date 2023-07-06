import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home h-100 d-flex align-items-md-center align-items-baseline">
        <div>
          <h4 className="fw-bold"> Hi There! </h4>
          <h1 className="fw-bold">
            I'm <span className="text_primary"> Suronjit Pal </span>
          </h1>
          <p className="my-3">
            A passionate MERN (MongoDB, ExpressJs, ReactJs, NodeJs) stack
            developer specializing in building efficient and innovative web
            applications. With expertise in full-stack development, I create
            dynamic and scalable solutions that deliver exceptional user
            experiences. My skills include Node.js, Express.js, React.js, Redux,
            MongoDB, and more. I enjoy collaborating in agile teams, solving
            complex challenges, and staying up-to-date with the latest trends.
            Let's connect and discuss how I can contribute to your next project!
          </p>
          <div className="my-4">
            <Link to="/contact" className="btn me-2 my-2 primary_button">
              Contact with me
            </Link>
            <button className="btn me-2 my-2 primary_button-border">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
