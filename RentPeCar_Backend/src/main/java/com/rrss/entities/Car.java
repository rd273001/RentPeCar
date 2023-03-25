package com.rrss.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "car")
public class Car {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int carId;
	private String carModel;
	private String carNumber;
	private String carColor;

	@ManyToOne
	@JoinColumn(name = "carCategoryId")
	private CarCategory carCategory;
	@OneToMany(fetch = FetchType.EAGER,mappedBy = "car",cascade = CascadeType.REFRESH)
	private List<Booking> bookingList;


	public Car() {
		this.bookingList = new ArrayList<>();
	}

	public Car(int carId, String carModel, String carNumber, String carColor, CarCategory carCategory) {
		super();
		this.carId = carId;
		this.carModel = carModel;
		this.carNumber = carNumber;
		this.carColor = carColor;
		this.carCategory = carCategory;
		this.bookingList = new ArrayList<>();
	}

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
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

	public CarCategory getCarCategory() {
		return carCategory;
	}

	public void setCarCategory(CarCategory carCategory) {
		this.carCategory = carCategory;
	}



}
