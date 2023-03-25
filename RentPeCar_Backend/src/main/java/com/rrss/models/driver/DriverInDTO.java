package com.rrss.models.driver;

import java.sql.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.rrss.entities.Driver;

public class DriverInDTO {
	private String driverName;
	private String license;
	private String gender;
	private String phone;
	private Date dob;
	private MultipartFile photo;

	public DriverInDTO() {
		// TODO Auto-generated constructor stub
	}

	public DriverInDTO(String driverName, String license, String gender, String phone, Date dob,
			MultipartFile photo) {
		super();
		this.driverName = driverName;
		this.license = license;
		this.gender = gender;
		this.phone = phone;
		this.dob = dob;
		this.photo = photo;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
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


	public MultipartFile getPhoto() {
		return photo;
	}

	public void setPhoto(MultipartFile photo) {
		this.photo = photo;
	}
	public static Driver toEntity(DriverInDTO dto) {
		Driver entity = new Driver();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}

}
