import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // load data . . .
    // and then navigate away
    const clientid = router.query.clientid;
    // router.push(`/clients/${clientid}/projecta`);
    router.push({
      pathname: "/clients/[clientid]/[clientprojectid]",
      query: {
        clientid: clientid,
        clientprojectid: "projecta",
      },
    });
  };

  console.log(router.query);
  return (
    <div>
      <h1>All the projects of a given or selected Client</h1>
      <h3>e.g. List of all projects under selected client</h3>
      <br />
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
