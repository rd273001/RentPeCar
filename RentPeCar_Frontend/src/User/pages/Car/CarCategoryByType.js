import { url } from "../../../Commons/constants";
import { useLocation ,useHistory} from "react-router";
import CarCard from "../../Components/CarCard";
import { useState } from "react";
import { Header } from "../../Components/Header";
import axios from "axios";

const CarCategoryByType = () => {
  const location = useLocation();
  const cars = location.state.carCategory;
  const [carCategory, setCarCategory] = useState([]);
  const history = useHistory();
  console.log(cars);

  const getCarCategoryDetails = (cars) => {
    axios.get(url + "/carCategory/" + cars.id).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setCarCategory(result);
        console.log(result);
        history.push("/cars-category-details", {
          carCategory: result.data,
        });
      } else {
        alert("error occured while getting all car categories");
      }
    });
  };
  return (
    <div>
      <Header />
      <CarCard onItemSelect={getCarCategoryDetails} cars={cars} />{" "}
    </div>
  );
};
export default CarCategoryByType;
