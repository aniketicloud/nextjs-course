import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Project from number of projects of given or selected client</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
