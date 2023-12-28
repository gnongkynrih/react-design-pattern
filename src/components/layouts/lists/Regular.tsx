import React from "react";

interface RegularListProps<T> {
  items: T[];
  sourceName: string;
  ItemComponent: React.FC<any>;
}

export const RegularList = ({
  items,
  sourceName,
  ItemComponent,
}: RegularListProps<Object>) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};
