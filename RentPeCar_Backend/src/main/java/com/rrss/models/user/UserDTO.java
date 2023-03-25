package com.rrss.models.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Booking;
import com.rrss.entities.User;

public class UserDTO {

	private int id;
	private String username;
	private String address;
	private Date dob;
	private String gender;
	private String email;
	private String phone;
	private String role;
	private List<Booking> bookingList;

	public UserDTO() {
		this.bookingList=new ArrayList<>();
	}

	public UserDTO(int id,String username, String address, Date dob, String role,String gender, String email, String phone) {
		super();
		this.id=id;
		this.username = username;
		this.address = address;
		this.role=role;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		this.bookingList=new ArrayList<>();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<Booking> getBookingList() {
		return bookingList;
	}

	public void setBookingList(List<Booking> bookingList) {
		this.bookingList = bookingList;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public static UserDTO fromEntity(User employee) {
		UserDTO dto = new UserDTO();
		BeanUtils.copyProperties(employee, dto);
		dto.setId(employee.getUserid());
		return dto;
	}

}
