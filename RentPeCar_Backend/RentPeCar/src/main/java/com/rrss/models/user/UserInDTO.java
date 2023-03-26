package com.rrss.models.user;

import java.sql.Date;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.User;

public class UserInDTO {
	private String username;
	private String address;
	private Date dob;
	private String gender;
	private String email;
	private String password;
	private String phone;
	private String role;

	public UserInDTO() {
	}

	public UserInDTO(String username, String address, Date dob, String gender, String email, String password,
			String phone, String role) {
		super();
		this.username = username;
		this.address = address;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.role = role;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserInDTO [username=" + username + ", address=" + address + ", dob=" + dob + ", gender=" + gender
				+ ", email=" + email + ", password=" + password + ", phone=" + phone + ", role=" + role + "]";
	}

	public static User toEntity(UserInDTO empDto) {
		User emp = new User();
		BeanUtils.copyProperties(empDto, emp);

		return emp;
	}

}
