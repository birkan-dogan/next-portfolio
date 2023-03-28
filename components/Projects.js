import React from "react";
import userData from "../constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40 ">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              githubUrl={proj.githubUrl}
              number={`${idx + 1}`}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, githubUrl }) => {
  return (
    <div className="relative overflow-hidden rounded project mx-2 md:mx-5">
      <a href={link} className="w-full block shadow-2xl" target="_blank">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="Birkan Dogan"
            className="transform hover:scale-105 transition duration-1000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </a>
      <div
        className="flex justify-center items-center flex-col absolute github"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <a
          href={githubUrl}
          target="_blank"
          className="flex justify-center items-center flex-col"
        >
          <img src="github-logo.svg" alt="Birkan Dogan" />
          <p className="text-black">Let's go to the repository</p>
        </a>
      </div>
    </div>
  );
};
