import React from "react";
import { createContext } from "react";
import Header from "./components/Header";
import ImageContent from "./components/ImageContent";
import Search from "./components/Search";
import AxiosHook from "./hooks/AxiosHook";

export const ImageContext = createContext();
const App = () => {
  const { response, isLoading, error, fetchData } = AxiosHook(
    `search/photos?page=1&query=&client_id=d6uiWKGgw_zhpFez3eVUvxeus8Z8HUhtk1dLVnqCRFg`
  );
  // console.log(response);
  const value = {
    response,
    isLoading,
    error,
    fetchData,
  };
  return (
    <>
      <ImageContext.Provider value={value}>
        <Header>
          <Search />
        </Header>
        <ImageContent />
      
      </ImageContext.Provider>
    </>
  );
};

export default App;
