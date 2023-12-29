import React from "react";
import "./App.css";
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
function App() {
  return (
    <div className="App">
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
