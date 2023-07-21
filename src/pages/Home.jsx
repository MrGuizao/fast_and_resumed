import { AppContext } from "../App";
import { useContext } from "react";

const Home = () => {
  const { data } = useContext(AppContext);

  return (
    <h1>
      HOMEPAGE de {data.name} que tem {data.idade} anos
    </h1>
  );
};
export default Home;
