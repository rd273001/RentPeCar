package com.rrss.models.car;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.CarType;

public class CarTypeDto {
	private String typeName;
	private String description;
	private String carImage;

	public CarTypeDto() {
	}

	public CarTypeDto(String typeName, String description, String carImage) {
		this.typeName = typeName;
		this.description = description;
		this.carImage = carImage;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCarImage() {
		return carImage;
	}

	public void setCarImage(String carImage) {
		this.carImage = carImage;
	}

	public static CarTypeDto fromEntity(CarType cartype) {
		CarTypeDto dto = new CarTypeDto();
		BeanUtils.copyProperties(cartype, dto);
		return dto;
	}

}
