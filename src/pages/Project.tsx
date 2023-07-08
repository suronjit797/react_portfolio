import { useNavigate, useParams } from "react-router-dom";
import { TProject } from "../interfaces/project";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import Loading from "../components/loading/Loading";
import { Button, Card } from "react-bootstrap";
import { FaShareSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Swal from "sweetalert2";
import { MdKeyboardBackspace } from "react-icons/md";

const Project = () => {
  const { projectId } = useParams();
  const navigate = useNavigate()
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

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })  


  const fetchData = async () => {
    setIsLoading(true);
    await getFrontend();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tagHandler = (tag: string) => {
    navigator.clipboard.writeText(tag);
    Toast.fire({
      icon: 'success',
      title: 'Text copy'
    })
  };

  return (
    <Layout>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="project px-lg-5 py-5 px-3 ">
          {/* <div className="project_body pt-4">
            <div className="project_image">
              <img src={project?.thumbnail} alt={project?.name} />
            </div>
          </div> */}
          <button onClick={()=> navigate(-1)} className="project_button" > <MdKeyboardBackspace /> </button>

          <Card bg="dark" text="light">
            <Card.Img variant="top" src={project?.thumbnail} />
            <Card.Body>
              <Card.Title className="fw-bold text-capitalize mb-3">
                {project?.name}
              </Card.Title>
              <Card.Text className="text-white-50 fs-6">
                {project?.description}
              </Card.Text>
              <p className="text-capitalize tags pb-3">
                Tags:
                {project?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    onClick={() => tagHandler(tag)}
                    className="bg-secondary p-2 rounded-5 mx-1"
                  >
                    {` ${tag} `}
                  </span>
                ))}
              </p>
              <div>
                <a href={project?.live_url} target="_blank">
                  <Button className="fw-light me-2" variant="primary">
                    <FaShareSquare />
                    <span className="ms-2"> Live preview </span>
                  </Button>
                </a>
                <a href={project?.github_url.frontend} target="_blank">
                  <Button className="fw-light me-2" variant="light">
                    <BsGithub />
                    <span className="ms-2"> Frontend </span>
                  </Button>
                </a>
                <a href={project?.github_url.backend} target="_blank">
                  <Button className="fw-light me-2" variant="secondary">
                    <BsGithub />
                    <span className="ms-2"> Backend </span>
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default Project;
