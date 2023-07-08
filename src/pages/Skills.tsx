import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import SkillCard from "../components/skillCard/SkillCard";
import { ISkillData } from "../interfaces/skills";
import { Row } from "react-bootstrap";
import Loading from "../components/loading/Loading";

const Skills: React.FC = () => {
  const [frontend, setFrontend] = useState<ISkillData[]>([]);
  const [backend, setBackend] = useState<ISkillData[]>([]);
  const [data, setData] = useState<ISkillData[]>([]);
  const [development, setDevelopment] = useState<ISkillData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFrontend = async () => {
    try {
      const { data } = await axios.get<ISkillData[]>("/json/frontendLogo.json");
      setFrontend(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBackend = async () => {
    try {
      const { data } = await axios.get<ISkillData[]>("/json/backendLogo.json");
      setBackend(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const { data } = await axios.get<ISkillData[]>("/json/dataLogo.json");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDevelopment = async () => {
    try {
      const { data } = await axios.get<ISkillData[]>(
        "/json/developmentLogo.json"
      );
      setDevelopment(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    await getFrontend();
    await getBackend();
    await getData();
    await getDevelopment();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="frontend p-5">
          <div>
            <div className="mb-4">
              <h3 className="fw-bold heading">
                <span > Frontend </span> Skills
              </h3>
              <hr />
            </div>
            <Row xs={2} md={4} lg={6} className="g-4">
              {frontend.map((data) => (
                <SkillCard key={data.name} data={data} />
              ))}
            </Row>
          </div>
          <div>
            <div className="my-4 pt-4">
              <h3 className="fw-bold heading">
                <span > Backend </span> Skills
              </h3>
              <hr />
            </div>
            <Row xs={2} md={4} lg={6} className="g-4">
              {backend.map((data) => (
                <SkillCard key={data.name} data={data} />
              ))}
            </Row>
          </div>
          <div>
            <div className="my-4 pt-4">
              <h3 className="fw-bold heading">
                <span > State & Data Management </span>
                Skills
              </h3>
              <hr />
            </div>
            <Row xs={2} md={4} lg={6} className="g-4">
              {data.map((data) => (
                <SkillCard key={data.name} data={data} />
              ))}
            </Row>
          </div>
          <div>
            <div className="my-4 pt-4">
              <h3 className="fw-bold heading">
                <span >
                  {" "}
                  Development & Design Tools{" "}
                </span>
                Skills
              </h3>
              <hr />
            </div>
            <Row xs={2} md={4} lg={6} className="g-4">
              {development.map((data) => (
                <SkillCard key={data.name} data={data} />
              ))}
            </Row>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Skills;
