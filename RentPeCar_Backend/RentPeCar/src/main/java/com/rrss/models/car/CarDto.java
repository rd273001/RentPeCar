package com.rrss.models.car;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Car;

public class CarDto {
	private int carId;
	private String carName;
	private String carModel;
	private String carNumber;
	private String carColor;

	public CarDto() {
	}

	public CarDto(int carId,String carName, String carModel, String carNumber, String carColor) {
		this.carName = carName;
		this.carModel = carModel;
		this.carNumber = carNumber;
		this.carColor = carColor;
	}


	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public String getCarName() {
		return carName;
	}

	public void setCarName(String carName) {
		this.carName = carName;
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
		return "CarDto [carName=" + carName + ", carModel=" + carModel + ", carNumber=" + carNumber + ", carColor="
				+ carColor + "]";
	}

	public static CarDto fromEntity(Car cars) {
		CarDto dto = new CarDto();
		BeanUtils.copyProperties(cars, dto);
		dto.setCarName(cars.getCarCategory().getCategoryName());
		return dto;
	}


}
