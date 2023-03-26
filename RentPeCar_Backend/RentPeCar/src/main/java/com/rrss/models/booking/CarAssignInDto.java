package com.rrss.models.booking;

import com.rrss.entities.Booking;
import com.rrss.entities.Car;
import com.rrss.entities.Driver;

public class CarAssignInDto {
	private Integer bookingid;
	private Car car;
	private Driver driver;
	private boolean status;

	public CarAssignInDto() {
	}



	public CarAssignInDto(Integer bookingid, Car car, Driver driver, boolean status) {
		super();
		this.bookingid = bookingid;
		this.car = car;
		this.driver = driver;
		this.status = status;
	}



	public Integer getBookingid() {
		return bookingid;
	}



	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}



	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public static Booking toEntity(CarAssignInDto bookingDto) {
		Booking booking = new Booking();
		booking.setDriver(bookingDto.getDriver());
		booking.setCar(bookingDto.getCar());
		booking.setStatus(bookingDto.getStatus());
		return booking;
	}
}
