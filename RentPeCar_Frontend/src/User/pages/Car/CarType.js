import { url } from "../../../Commons/constants";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import axios from "axios";

import React from "react";
import CarTypeCard from "../../Components/CarTypeCard";
import { Header } from "../../Components/Header";

export default function CarType() {
    const [carsType, setCarType] = useState([]);
    const [carCategory, setCarCategory] = useState([]);
    const history = useHistory();
    useEffect(() => {
      console.log(`Cars Type component got loaded`);
      getAllCarTypes();
    }, []);
  
    const getCarCategoryOfSelectedTypes = (carType) => {
      axios.get(url + "/carCategory/type/" + carType.id).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          setCarCategory(result);
          console.log(result);
          history.push("/cars-category-list", {
            carCategory: result.data,
          });
        } else {
          alert("error occured while getting all car categories");
        }
      });
    };
    const getAllCarTypes = () => {
      axios.get(url + "/carType").then((response) => {
        const result = response.data;
        console.log(result.status);
        if (result.status === "success") {
          setCarType(result.data);
          console.log(result.data);
        } else {
          alert("Error while loading data");
        }
      });
    };
    return (


    
    <div>
      <div>
      <Header  className="navbar navbar-static-top"></Header>
      <h1 className="title-header ">Car Types</h1>
      </div>
      <CarTypeCard
        onItemSelect={getCarCategoryOfSelectedTypes}
        carsType={carsType}
      />
    </div>
  );
}
