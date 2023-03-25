import "./CarCard.css";
import { url } from "../../Commons/constants";

const CarTypeCard = ({ carsType, onItemSelect }) => {
  return (
    <div>
      {carsType.map((carType) => {
        return (
        
        <div  className="car-type-container">
          <div
            onClick={() => {
              onItemSelect(carType);
            }}
          >
            <img
              src={url + "/" + carType.carImage}
              className="image"
              alt={carType.typeName}
            />
            <div className="type-title">{carType.typeName}</div>
          </div>
          </div>
        );
      })}
    </div>
  );
};
export default CarTypeCard;
