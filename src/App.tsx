import React, { useState } from "react";
import "./App.css";
import { ControlledFlow } from "./components/control-uncontrol-components/controlled-flow";
// import { DataSource } from "./components/container-component/data-source";
// import { ControlledFlow } from "./components/control-uncontrol-components/controlled-flow";
// import { ControlledModal } from "./components/control-uncontrol-components/controlled-modal";
// import { UserInfo } from "./components/container-component/user-info";
// import { ResourceLoader } from "./components/container-component/resource-loader";
// import { BookInfo } from "./components/container-component/book-info";
// import { CurrentUserLoader } from "./components/container-component/current-user-loader";
// import { UserLoader } from "./components/container-component/user-loader";
// import axios from "axios";
// import { DataSource } from "./components/container-component/data-source";
// const fetchData = async (url: string) => {
//   const response = await axios.get(url);
//   return response.data;
// };
type person = {
  name?: string;
  age?: number;
  country?: string;
};

const StepOne = ({ next }: any) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }: any) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }: any) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  );
};

const StepFour = ({ next }: any) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => next({ country: "Poland" })}>Next</button>
    </>
  );
};

function App() {
  const [data, setData] = useState<person>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep: person) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <div className="App">
      {/* <ControlledModal
        shouldShow={shouldDisplay}
        close={() => setShouldDisplay(false)}
      >
        <h1>Modal Content</h1>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Show Modal"}
      </button> */}
      <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
        <StepOne />
        <StepTwo />
        {/* {data.age > 25 && <StepThree />} */}
        <StepFour />
      </ControlledFlow>
      {/* <SplitScreenIndex /> */}
      {/* <AuthorIndex /> */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceName="user" resourceUrl="/users/1">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName="book" resourceUrl="/books/1">
        <BookInfo />
      </ResourceLoader> */}
      {/* <DataSource getData={() => fetchData("/users/1")} resourceName={"user"}>
        <UserInfo />
      </DataSource> */}
    </div>
  );
}

export default App;
