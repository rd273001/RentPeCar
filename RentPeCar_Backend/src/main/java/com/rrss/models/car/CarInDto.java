package com.rrss.models.car;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Car;
import com.rrss.entities.CarCategory;

public class CarInDto {

	private CarCategory carCategory;
	private String carModel;
	private String carNumber;
	private String carColor;

	public CarInDto() {
		// TODO Auto-generated constructor stub
	}

	public CarInDto(CarCategory carCategory, String carModel, String carNumber, String carColor) {
		super();
		this.carCategory = carCategory;
		this.carModel = carModel;
		this.carNumber = carNumber;
		this.carColor = carColor;
	}

	public CarCategory getCarCategory() {
		return carCategory;
	}

	public void setCarCategory(CarCategory carCategory) {
		this.carCategory = carCategory;
	}

	public String getCarModel() {
		return carModel;
	}

	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}

	public String getCarNumber() {
		return carNumber;
	}

	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}

	public String getCarColor() {
		return carColor;
	}

	public void setCarColor(String carColor) {
		this.carColor = carColor;
	}

	@Override
	public String toString() {
		return "CarInDto [categoryId=" + carCategory + ", carModel=" + carModel + ", carNumber="
				+ carNumber + ", carColor=" + carColor + "]";
	}

	public static Car toEntity(CarInDto carInDto) {

		Car car = new Car();
		BeanUtils.copyProperties(carInDto, car);
		car.setCarCategory(carInDto.getCarCategory());
		return car;
	}

}
