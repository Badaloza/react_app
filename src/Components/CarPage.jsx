import React from "react";
import car from "./car.png";

function CarPage() {
  return (
    <>
      <div>Welcome to car page</div>
      <div>
        <h3 style={{
          color: "green",
          fontSize: "20px",
          backgroundColor: "grey",
        }}>
          This is a Car
        </h3>
        <img src= {car} alt="car" />
      </div>
    </>
  );
}
export default CarPage;
