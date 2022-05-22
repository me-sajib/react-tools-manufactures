import React from "react";
import { useQuery } from "react-query";
import ToolsProduct from "./ToolsProduct";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );
  if (isLoading) return <p>Loading...</p>;
  console.log(tools);
  return (
    <div className="container-width">
      <div className="my-16 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
        {tools.map((tool) => (
          <ToolsProduct tools={tool} key={tool._id} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
