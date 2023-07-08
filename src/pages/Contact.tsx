import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="home h-100 d-flex align-items-md-center align-items-baseline">
        <form>
          <h4 className="text-center mb-4 heading text-capitalize">
            <span> late's </span> Discuss
          </h4>
          <div className="input-gro">
            <input type="text" name="" id="" />
          </div>
          <div className="input-gro">
            <input type="email" name="" id="" />
          </div>
          <div className="input-gro">
            <textarea name="message" id="message" rows={10} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
