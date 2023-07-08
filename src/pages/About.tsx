import moment from "moment";
import Layout from "../components/Layout/Layout";

const About = () => {
  const birthday = moment("20001231", "YYYYMMDD").fromNow().slice(0, 8);

  return (
    <Layout>
      <div className="about px-lg-5 py-5 px-3 ">
        {/* <div> */}
          <h3 className="heading">
            <span> About </span> Me
          </h3>
          <hr />
          <p> Hello, <span className="text_primary"> Suronjit Pal </span> here! </p>
          <p>
            a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack
            developer with expertise in building scalable and user-friendly web
            applications. I have a solid understanding of HTML, CSS, JavaScript,
            and the entire MERN stack. I specialize in creating responsive and
            intuitive user interfaces using React.js and have experience with
            state management using Redux. On the back-end, I work with Node.js
            and Express.js to design and develop RESTful APIs, interact with
            databases like MongoDB, and implement authentication using
            technologies like JWT. I enjoy collaborating in agile teams, solving
            complex problems, and keeping up with the latest industry trends.
            Clean code, maintainable architectures, and performance optimization
            are important to me. Let's connect and discuss how I can contribute
            to your next project!
          </p>

          <div className="text-capitalize about_short">
            <p>
              <b> Age:</b> <span> {birthday} </span>
            </p>
            <p>
              <b> Address:</b> <span> Satkhira, Bangladesh </span>
            </p>
            <p>
              <b> Nationality:</b> <span> Bangladeshi </span>
            </p>
            <p>
              <b> language: </b>
              <span>
                Bangla (Native), English (Comfortable), Hindi (Comfortable)
              </span>
            </p>
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
