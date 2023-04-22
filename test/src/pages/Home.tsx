import React from "react";

interface Props {
  name: string;
  age: number;
}

const MyComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
    </div>
  );
};

export default MyComponent;