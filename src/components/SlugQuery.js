import React from "react";
import { useQuery } from "@apollo/react-hooks";

const SlugQuery = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug },
  });

  if (loading) return <p>Loading</p>;
  if (error) {
    console.log(JSON.stringify(error))
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return children({ data });
};

export default SlugQuery;
