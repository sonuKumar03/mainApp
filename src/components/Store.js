import React from "react";
import { useParams, Route } from "react-router-dom";
export const Store = ({match}) => {
  const {id} = useParams();
  return (
    <div>
      <Route path={`${match.url}/${id}`}>Store {id}</Route>
    </div>
  );
};
