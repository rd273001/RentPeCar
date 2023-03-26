package com.rrss.models.driver;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Booking;
import com.rrss.entities.Driver;

public class DriverDTO {
	private int driverId;
	private String driverName;
	private String photo;
	private String license;
	private String gender;
	private String phone;
	private Date dob;
	private Booking booking;

	public DriverDTO() {
		// TODO Auto-generated constructor stub
	}

	public DriverDTO(int driverId, String driverName, String photo, String license, String gender, String phone,
			Date dob, Booking booking) {
		super();
		this.driverId = driverId;
		this.driverName = driverName;
		this.photo = photo;
		this.license = license;
		this.gender = gender;
		this.phone = phone;
		this.dob = dob;
		this.booking = booking;
	}

	public int getDriverId() {
		return driverId;
	}

	public void setDriverId(int driverId) {
		this.driverId = driverId;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}


	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public static DriverDTO fromEntity(Driver driver) {
		DriverDTO driverDto=new DriverDTO();
		BeanUtils.copyProperties(driver, driverDto);
		return driverDto;
	}

}
