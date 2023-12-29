import React, { useEffect, ReactNode, ReactElement } from "react";
import { useState } from "react";

interface DataSourceProps {
  getData: () => Promise<any>;
  resourceName: string;
  children: ReactNode;
}
export const DataSource = ({
  getData = async () => {},
  resourceName,
  children,
}: DataSourceProps) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            [resourceName]: resource,
          });
        }
        return child;
      })}
    </>
  );
};
