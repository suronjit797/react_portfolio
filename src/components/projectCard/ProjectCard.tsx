import { TProject } from "../../interfaces/project";

interface IProjectProps {
  data: TProject;
}

const ProjectCard: React.FC<IProjectProps> = ({ data }) => {
  const { image, name, packages, tags } = data;
  return <div>{name}</div>;
};

export default ProjectCard;
