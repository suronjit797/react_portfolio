import { useParams } from "react-router-dom";
import { TProject } from "../interfaces/project";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import Loading from "../components/loading/Loading";

const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<TProject | undefined>({
    name: "",
    _id: "",
    thumbnail: "",
    images: [],
    packages: [],
    description: "",
    live_url: "",
    github_url: {
      frontend: "",
      backend: "",
    },
    tags: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFrontend = async () => {
    try {
      const { data } = await axios.get<TProject[]>("/json/projects.json");
      const find = data.find((d) => d._id === projectId);
      setProject(find);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    await getFrontend();
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
        <div className="project p-5">
          <div className="project_body pt-4">{project?.name} </div>
        </div>
      )}
    </Layout>
  );
};

export default Project;
