interface NumberListProps<T> {
  items: T[];
  sourceName: string;
  ItemComponent: React.FC<any>;
}

export const NumberedList = ({
  items,
  sourceName,
  ItemComponent,
}: NumberListProps<Object>) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3> {i + 1} </h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};
