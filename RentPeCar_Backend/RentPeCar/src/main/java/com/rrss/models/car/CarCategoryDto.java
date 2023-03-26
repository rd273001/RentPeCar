package com.rrss.models.car;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Car;
import com.rrss.entities.CarCategory;

public class CarCategoryDto {

	private int id;
	private String categoryName;
	private String fuelType;
	private double pricePerDay;
	private String seatCapacity;
	private boolean airbag;
	private String carCatImg;
	private String typeName;
	private List<Car> carList;

	public CarCategoryDto() {
		this.carList = new ArrayList<>();
	}


	public CarCategoryDto(int id,String categoryName, String fuelType, double pricePerDay, String seatCapacity, boolean airbag,
			String carCatImg, String typeName) {
		this.id=id;
		this.categoryName = categoryName;
		this.fuelType = fuelType;
		this.pricePerDay = pricePerDay;
		this.seatCapacity = seatCapacity;
		this.airbag = airbag;
		this.carCatImg = carCatImg;
		this.typeName = typeName;
		this.carList = new ArrayList<>();
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public double getPricePerDay() {
		return pricePerDay;
	}

	public void setPricePerDay(double pricePerDay) {
		this.pricePerDay = pricePerDay;
	}

	public String getSeatCapacity() {
		return seatCapacity;
	}

	public void setSeatCapacity(String seatCapacity) {
		this.seatCapacity = seatCapacity;
	}

	public boolean isAirbag() {
		return airbag;
	}

	public void setAirbag(boolean airbag) {
		this.airbag = airbag;
	}

	public String getCarCatImg() {
		return carCatImg;
	}

	public void setCarCatImg(String carCatImg) {
		this.carCatImg = carCatImg;
	}


	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}


	public List<Car> getCarList() {
		return carList;
	}


	public void setCarList(List<Car> carList) {
		this.carList = carList;
	}


	@Override
	public String toString() {
		return "CarCategoryDto [id=" + id + ", categoryName=" + categoryName + ", fuelType=" + fuelType
				+ ", pricePerDay=" + pricePerDay + ", seatCapacity=" + seatCapacity + ", airbag=" + airbag
				+ ", carCatImg=" + carCatImg + ", typeName=" + typeName + ", carList=" + carList + "]";
	}


	public static CarCategoryDto fromEntity(CarCategory carCategory) {
		CarCategoryDto dto = new CarCategoryDto();
		BeanUtils.copyProperties(carCategory, dto);
		dto.setTypeName(carCategory.getCarType().getTypeName());
		return dto;
	}




}
