import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { TProject } from "../interfaces/project";
import axios from "axios";
import Loading from "../components/loading/Loading";
import { BsSearch } from "react-icons/bs";
import ProjectCard from "../components/projectCard/ProjectCard";
import { Row } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [filteredData, setFilteredData] = useState<TProject[]>(projects);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const getFrontend = async () => {
    try {
      const { data } = await axios.get<TProject[]>("/json/projects.json");
      console.log(data);
      setProjects(data);
      setFilteredData(data);
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

  // handler
  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (search) {
      const filtered = projects.filter(
        (project) =>
          project.name.includes(search) ||
          project.packages.includes(search) ||
          project._id.includes(search) ||
          project.description.includes(search) ||
          project.tags.includes(search)
      );

      setFilteredData(filtered);
    } else {
      setFilteredData(projects);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="project p-5">
          <div className="d-flex">
            <form
              className=" project_search ms-auto"
              autoComplete="off"
              onSubmit={searchHandler}
            >
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
          <hr />
          <div className="project_body pt-4">
            <Row xs={1} md={2} lg={3} className="g-4">
              {filteredData.length > 0
                ? filteredData.map((filter) => (
                    <ProjectCard key={filter._id} data={filter} />
                  ))
                : <p className='text-danger'> No Project Found </p>}
            </Row>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
