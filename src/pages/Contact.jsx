import { AppContext } from "../App";
import { useContext } from "react";

const Contact = () => {
  const { data } = useContext(AppContext);

  return (
    <h1>
      Contact PAGE of {data.name} who is {data.idade} years old
    </h1>
  );
};
export default Contact;
