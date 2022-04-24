import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>All the projects of a given or selected Client</h1>
      <h3>e.g. List of all projects under selected client</h3>
      <br />
    </div>
  );
};

export default ClientProjectsPage;
