import { useRouter } from "next/router";
// import withRouter for class based component as a wrapper

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log("pathname: ", router.pathname);
  console.log("query: ", router.query);

  return (
    <div>
      <h1>
        Portfolio Project Page with the router of portfoilio/
        {router.query.projectid}
      </h1>
    </div>
  );
};

export default PortfolioProjectPage;
