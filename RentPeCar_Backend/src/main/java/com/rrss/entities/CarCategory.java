package com.rrss.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
@Table(name = "car_category")
public class CarCategory {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "carCategoryId")
	private int id;
	private String categoryName;
	private String fuelType;
	private double pricePerDay;
	private String seatCapacity;
	private boolean airbag;
	private String carCatImg;
	@ManyToOne
	@JoinColumn(name = "carTypeId")
	private CarType carType;


	@OneToMany(mappedBy = "carCategory",cascade=CascadeType.REFRESH)
	private List<Booking> bookingList;
	@OneToMany(fetch = FetchType.EAGER,mappedBy = "carCategory", cascade = CascadeType.REFRESH)
	private List<Car> carList;

	public CarCategory() {
		this.bookingList = new ArrayList<>();
		this.carList = new ArrayList<>();
	}

	public CarCategory(int id, String categoryName, String fuelType, double pricePerDay, String seatCapacity,
			boolean airbag, String carCatImg, CarType carType) {
		this.id = id;
		this.categoryName = categoryName;
		this.fuelType = fuelType;
		this.pricePerDay = pricePerDay;
		this.seatCapacity = seatCapacity;
		this.airbag = airbag;
		this.carCatImg = carCatImg;
		this.carType = carType;
		this.bookingList = new ArrayList<>();
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

	public CarType getCarType() {
		return carType;
	}

	public void setCarType(CarType carType) {
		this.carType = carType;
	}

//	public List<Booking> getBookingList() {
//		return bookingList;
//	}
//
//	public void setBookingList(List<Booking> bookingList) {
//		this.bookingList = bookingList;
//	}

//	public List<Car> getCarList() {
//		return carList;
//	}
//
//	public void setCarList(List<Car> carList) {
//		this.carList = carList;
//	}





}
