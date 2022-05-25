import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import ToolsProduct from "./ToolsProduct";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://boiling-hollows-81420.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );
  if (isLoading) return <Spinner />;
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
