import Layout from "../components/Layout/Layout";
import AboutForm from "../components/about_form/AboutForm";
import AddressShort from "../components/address_short/AddressShort";

const Contact = () => {
  return (
    <Layout>
      <div className="">
        <div className="row h-100 py-5 px-lg-4">
          <h4 className="mb-4 heading text-capitalize">
            <span> late's </span> Discuss
          </h4>
          <hr className="mb-5" />
          <div className="col-lg-6">
            <AddressShort />
          </div>

          <div className="col-lg-6">
            <AboutForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
