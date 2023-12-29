import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../../types";

interface UserLoaderProps {
  userId: string;
  children: React.ReactNode;
}
interface UserProps {
  user?: User;
}
export const UserLoader = ({ userId, children }: UserLoaderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

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
