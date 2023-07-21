import { AppContext } from "../App";
import { useContext } from "react";

const Menu = () => {
  const { data } = useContext(AppContext);

  return (
    <h1>
      Menu de {data.name} que tem {data.idade} anos
    </h1>
  );
};
export default Menu;
