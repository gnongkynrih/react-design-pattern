import React from "react";
type person = {
  name?: string;
  age?: number;
  country?: string;
};
interface ControlledFlowProps {
  children: React.ReactNode;
  currentStepIndex: number;
  onNext: (data: person) => void;
}
export const ControlledFlow = ({
  children,
  currentStepIndex,
  onNext,
}: ControlledFlowProps) => {
  // const next = (data: person) => {
  //   onNext(data);
  // };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  // if (React.isValidElement(currentChild)) {
  //   return React.cloneElement(currentChild, { next });
  // }

  return currentChild;
};
