import Head from "next/head";
import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <ContainerBlock
        title="Birkan Dogan - Full-Stack Developer"
        description="Portfolio site to display full-stack projects"
      >
        <Hero />
      </ContainerBlock>
    </div>
  );
}
