import React from "react";

function Countries(props) {
  return (
    <div>
      {props.data.map((count) => {
        return <div key={count.id}>{count}</div>;
      })}
    </div>
  );
}

export default Countries;
