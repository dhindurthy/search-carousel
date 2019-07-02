import React from "react";

function DataList(props) {
  return (
    <datalist id={props.id}>
      {props.articles.map((article, index) => (
        <option key={index}>{article.name}</option>
      ))}
    </datalist>
  );
}
export default DataList;
