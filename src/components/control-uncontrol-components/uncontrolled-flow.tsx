// import React, { useState } from "react";

// interface UncontrolledFlowProps {
//   children: React.ReactNode[];
//   onDone: (data: any) => void;
// }
// export const UncontrolledFlow = ({
//   children,
//   onDone,
// }: UncontrolledFlowProps) => {
//   const [data, setData] = useState({});
//   const [currentStepIndex, setCurrentStepIndex] = useState(0);

//   const currentChild = React.Children.toArray(children)[currentStepIndex];

//   const next = (dataFromStep:Object) => {
//     const nextIndex = currentStepIndex + 1;
//     const updatedData = { ...data, ...dataFromStep };

//     console.log(updatedData);

//     if (nextIndex < children.length) {
//       setCurrentStepIndex(nextIndex);
//     } else {
//       onDone(updatedData);
//     }

//     setData(updatedData);
//   };

//   if (React.isValidElement(currentChild)) {
//     return React.cloneElement(currentChild, { next });
//   }

//   return currentChild;
// };
