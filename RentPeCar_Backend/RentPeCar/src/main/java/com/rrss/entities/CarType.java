package com.rrss.entities;

import java.util.ArrayList;
import java.util.List;

//import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "car_type")
public class CarType {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "carTypeId")
	private int id;
	private String typeName;
	private String description;
	private String carImage;
	@OneToMany(mappedBy = "carType")
	private List<CarCategory> categoryList;
	public CarType() {
		this.categoryList = new ArrayList<>();
	}

	public CarType(int id, String typeName, String description, String carImage) {

		this.id = id;
		this.typeName = typeName;
		this.description = description;
		this.carImage = carImage;
		this.categoryList = new ArrayList<>();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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



}
