import axios from "axios";
import React, { useState } from "react";

export default function Country() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
    console.log("data:", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/countries", {
        country: data,
      })
      .then((res) => {
        console.log("res:", res.data);
      });
  };
  return (
    <div>
      <h1>Countries</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Country Name"
          id={"country"}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" placeholder="Submit" />
      </form>
    </div>
  );
}
