
package com.rrss.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.User;
import com.rrss.models.Response;
import com.rrss.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/email")
public class EmailController {

	@Autowired
	private UserService userService;

	@PostMapping("/sendotp/{email}")
	public ResponseEntity<?> sendotp(@PathVariable String email, HttpSession session) {
		session.setMaxInactiveInterval(180);
		User user = userService.findByEmail(email);
		if (user != null) {
			userService.sendOtp(user, session);
			return Response.success(user);
		}
		return Response.error(user);

	}

	@PutMapping("/reset")
	public ResponseEntity<?> resetPassword(String password, User user) {
		userService.resetpassword(user, password);
		return Response.success(user);

	}
}