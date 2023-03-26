package com.rrss.models.user;

public class UserUpdate {
	private String username;
	private String address;
	private String phone;

	public UserUpdate() {
		// TODO Auto-generated constructor stub
	}

	public UserUpdate(String username, String address, String phone) {
		super();
		this.username = username;
		this.address = address;
		this.phone = phone;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}



}
