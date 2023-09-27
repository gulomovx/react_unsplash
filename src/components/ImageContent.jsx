import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";
const ImageContent = () => {
  const { response, isLoading } = useContext(ImageContext);
  console.log(response);
  return (
    <div className="text-center">
      <h1 className="text-center mt-6 text-3xl"></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8  max-w-8xl mx-auto px-4">
        {isLoading ? <Skeleton item={12} />: response.map((data, key) => <Image key={key} data={data}/>)}
      </div>
    </div>
  );
};

export default ImageContent;
