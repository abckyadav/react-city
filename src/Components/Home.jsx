import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getCity();
  }, []);

  const getCity = () => {
    axios.get(`http://localhost:8080/cities`).then((res) => {
      console.log("res:", res.data);

      setCity([...res.data]);
    });
  };
  return (
    <div>
      <h1>Home</h1>
      <table>
        <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {city.map((e) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.country}</td>
            <td>{e.city}</td>
            <td>{e.population}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
