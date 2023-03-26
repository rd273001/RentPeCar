package com.rrss.models.booking;

import java.sql.Date;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Booking;
import com.rrss.entities.CarCategory;
import com.rrss.entities.User;

public class BookingInDto {

	private User user;
	private CarCategory carCategory;
	private String location;
	private Date fromDate;
	private Date toDate;

	private double securityDeposit;

	public BookingInDto() {

	}

	public BookingInDto(User user, CarCategory carCategory, double securityDeposit, String location, Date fromDate,
			Date toDate) {
		super();
		this.user = user;
		this.carCategory = carCategory;
		this.securityDeposit = securityDeposit;
		this.location = location;
		this.fromDate = fromDate;
		this.toDate = toDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public CarCategory getCarCategory() {
		return carCategory;
	}

	public void setCarCategory(CarCategory carCategory) {
		this.carCategory = carCategory;
	}

	public double getSecurityDeposit() {
		return securityDeposit;
	}

	public void setSecurityDeposit(double securityDeposit) {
		this.securityDeposit = securityDeposit;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

	public static Booking toEntity(BookingInDto bookingDto) {
		Booking booking = new Booking();
		BeanUtils.copyProperties(bookingDto, booking);
		return booking;
	}

}
