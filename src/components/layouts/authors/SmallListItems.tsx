import { User } from "../../../types";

export const SmallAuthorListItem = ({ author }: { author: User }) => {
  const { name, age } = author;
  return (
    <p>
      {" "}
      Name: {name}, Age: {age}
    </p>
  );
};
