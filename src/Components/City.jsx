import React, { useEffect, useState } from "react";
import axios from "axios";

export default function City() {
  const [country, setCountry] = useState([]);

  const [data, setData] = useState({
    city: "",
    population: "",
    country: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8080/countries`).then((res) => {
      console.log("res:", res.data);
      setCountry([...res.data]);
    });
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    console.log("value:", value, id);

    setData({ ...data, [id]: value });
    console.log("data:", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/cities`, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h1>Add City</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id={"city"}
          placeholder="Enter City Name"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          id={"population"}
          placeholder="Enter Population"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Enter Country"
          onChange={(e) => handleChange(e)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
