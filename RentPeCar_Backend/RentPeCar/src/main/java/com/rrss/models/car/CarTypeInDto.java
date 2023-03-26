package com.rrss.models.car;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.rrss.entities.CarType;

public class CarTypeInDto {
	private String typeName;
	private String description;
	private MultipartFile carImage;

	public CarTypeInDto() {

	}

	public CarTypeInDto(String typeName, String description, MultipartFile carImage) {
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

	public MultipartFile getCarImage() {
		return carImage;
	}

	public void setCarImage(MultipartFile carImage) {
		this.carImage = carImage;
	}

	@Override
	public String toString() {
		return "CarTypeInDto [typeName=" + typeName + ", description=" + description + ", carImage=" + carImage + "]";
	}

	public static CarType toEntity(CarTypeInDto dto) {
		CarType entity = new CarType();
		BeanUtils.copyProperties(dto, entity,"carImage");
		return entity;
	}


}
