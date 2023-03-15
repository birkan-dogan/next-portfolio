import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";
import LatestCode from "../components/LatestCode";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";

export default function Home({ repositories }) {
  return (
    <div>
      <ContainerBlock
        title="Birkan Dogan - Full-Stack Developer"
        description="Portfolio site to display Birkan Dogan's projects"
      >
        <Hero />
        <FavouriteProjects />
        <LatestCode repositories={repositories} />
      </ContainerBlock>
    </div>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
