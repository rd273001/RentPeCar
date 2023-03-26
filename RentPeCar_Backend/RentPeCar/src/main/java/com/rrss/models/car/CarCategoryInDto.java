package com.rrss.models.car;
import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.rrss.entities.CarCategory;
import com.rrss.entities.CarType;

public class CarCategoryInDto {
	private String categoryName;
	private CarType carType;
	private String fuelType;
	private Double pricePerDay;
	private String seatCapacity;
	private boolean airbag;
	private MultipartFile carCatImg;

	public CarCategoryInDto() {
	}



	public CarCategoryInDto(String categoryName, int carTypeId, String fuelType, Double pricePerDay,
			String seatCapacity, boolean airbag, MultipartFile carCatImg,CarType carType) {
		this.categoryName = categoryName;
		this.carType = carType;
		this.fuelType = fuelType;
		this.pricePerDay = pricePerDay;
		this.seatCapacity = seatCapacity;
		this.airbag = airbag;
		this.carCatImg = carCatImg;
	}



	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public CarType getCarTypeId() {
		return carType;
	}

	public void setCarType(CarType carType) {
		this.carType = carType;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public Double getPricePerDay() {
		return pricePerDay;
	}

	public void setPricePerDay(Double pricePerDay) {
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

	public MultipartFile getCarCatImg() {
		return carCatImg;
	}

	public void setCarCatImg(MultipartFile carCatImg) {
		this.carCatImg = carCatImg;
	}



	@Override
	public String toString() {
		return "CarCategoryInDto [categoryName=" + categoryName + ", carTypeId=" + carType + ", fuelType=" + fuelType
				+ ", pricePerDay=" + pricePerDay + ", seatCapacity=" + seatCapacity + ", airbag=" + airbag
				+ ", carCatImg=" + carCatImg + "]";
	}

	public static CarCategory toEntity(CarCategoryInDto dto) {
		CarCategory entity = new CarCategory();
		BeanUtils.copyProperties(dto, entity);
		entity.setCarType(dto.getCarTypeId());
		return entity;
	}



}
