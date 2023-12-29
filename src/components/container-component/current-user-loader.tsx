import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../../types";

interface CurrentUserProps {
  children: React.ReactNode;
}
interface UserProps {
  user?: User;
}
export const CurrentUserLoader = ({ children }: CurrentUserProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<UserProps>, {
            user,
          });
        }
        return child;
      })}
    </>
  );
};
