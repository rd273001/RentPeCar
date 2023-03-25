import "./CarCard.css";
import { url } from "../../Commons/constants";

const CarCard = ({ cars ,onItemSelect}) => {
  return (
    <div>
      {cars.map((car) => {
        return (
          <div
            className="item-container"
             onClick={() => {
               onItemSelect(car)
             }}
          >
            <table style={{borderradius:"5px"}}>
              <tr className="car-info">
                <td>
                  <div className="item-title"> {car.fuelType}</div>
                </td>
                <td>
                  <div className="price">{car.seatCapacity} Seats</div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <img
                    src={url + "/" + car.carCatImg}
                    className="image"
                    alt="category"
                  />
                </td>
              </tr>
              <tr className="car-info">
                <td className="item-title">
                  <div >
                    <div className="">{car.typeName}</div>
                    <div className="">{car.categoryName}</div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="price">{car.pricePerDay}/Day</div>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default CarCard;
