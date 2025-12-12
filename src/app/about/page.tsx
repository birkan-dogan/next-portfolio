"use client";

import { motion } from "framer-motion";

import Header from "@/components/About/Header";
import Summary from "@/components/About/Summary";
import TechSkills from "@/components/About/TechSkills";
import SoftSkills from "@/components/About/SoftSkills";
import Experience from "@/components/About/Experience";
import Languages from "@/components/About/Languages";
import Projects from "@/components/About/Projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto flex flex-col justify-center items-center">
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <Header />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <Summary />

          <TechSkills />

          <SoftSkills />

          <Experience />

          <Projects />

          <Languages />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
