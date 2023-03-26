import axios from "axios";

const getLatestRepos = async (data) => {
  try {
    const username = data.githubUsername;

    const res = await axios(
      `https://api.github.com/search/repositories?q=user:${username}`
    );
    let repos = res.data.items;
    // let latestSixRepos = repos.splice(repos.length - 6, repos.length);
    const latestRepos = repos.sort((a, b) =>
      a.updated_at > b.updated_at ? 1 : -1
    );
    return latestRepos.slice(latestRepos.length - 6, latestRepos.length);
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
