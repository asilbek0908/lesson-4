import { useState, useEffect } from "react";
import "./ComponentB.css";
import axios from "axios";

const ComponentB = () => {
  const [datas, setDatas] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setDatas(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, [datas]);
  console.log(datas);

  return (
    <div className="cards">
      {datas &&
        datas.map((country) => (
          <div key={country.name.common}>
            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
          </div>
        ))
        }
    </div>
  );
};

export default ComponentB;
