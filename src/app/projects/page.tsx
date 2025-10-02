import Projects from "@/components/projects/project-comp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Birkan Dogan",
};

const ProjectsPage = () => {
  return (
    <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
