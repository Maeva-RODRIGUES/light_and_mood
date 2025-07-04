import React from "react";

const MainApp: React.FC = () => {
  console.log("MainApp monté !");
  return (
    <div style={{ background: "pink", padding: "2rem" }}>
      <h1>Hello depuis React !</h1>
    </div>
  );
};

export default MainApp;
