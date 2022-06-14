import React, { useState } from "react";
import Header from "../components/UI/Header";
import axios from "axios";
import Countries from "../components/Countries";

function Home() {
  const [countriesData, setCountriesData] = useState();
  // const [setValue, setValueHandler] = useState({
  //   value: "all",
  //   name: "",
  // });
  // const [setChangeValue, setChangeValueHandler] = useState(null);

  // const changeValueName = () => {
  //   // setValueHandler( () => {
  //   //   return {
  //   //     value: ''
  //   //   }
  //   // })
  // };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all` //${setValue.value}
      );
      console.log(response);
      const dataArr = [...response.data];
      console.log(dataArr);
      setCountriesData(dataArr);
    } catch (error) {
      console.error(error);
    }
  };

  const formSubmitionHandler = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <React.Fragment>
      <Header />
      <main className="p-4 h-screen bg-slate-50">
        <form onSubmit={formSubmitionHandler}>
          <div className="relative">
            <button type="submit" className="absolute top-4 left-4 text-md  ">
              <i class="fas fa-search"></i>
            </button>
            <input
              // onChange={setValue.name}
              type="text"
              placeholder="Search for a country .."
              className="border-1 py-3 px-14 w-full shadow-md font-light rounded-md focus:bg-slate-200 outline-none"
            />
          </div>
          <div className="mt-2 w-8/12">
            <label
              for="Region"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Filter by Region
            </label>

            <select
              name="Region"
              id="Region"
              // onChange={setChangeValue}
              className="g-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Euroupe">Euroupe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </form>
        {/* <Countries data={countriesData} /> */}
        <ul>
          {countriesData.map((item) => {
            return <li key={item.area}>{item.name}</li>;
          })}
        </ul>
      </main>
    </React.Fragment>
  );
}

export default Home;
