package com.rrss.models.user;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.User;

public class UserLoginInDTO {
	private String email;
	private String password;
	public UserLoginInDTO() {
	}


	public UserLoginInDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
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


	@Override
	public String toString() {
		return "UserLoginInDTO [email=" + email + ", password=" + password + "]";
	}


	public static User toEntity(UserLoginInDTO userDto) {
		User user = new User();
		BeanUtils.copyProperties(userDto, user);

		return user;
	}

}
