package com.rrss.controllers;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.dto.Email;
import com.rrss.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/forgot_password")
public class ForgotPasswordController {
	@Autowired
	private JavaMailSender sender;
	@Autowired
	private UserService userService;

	@PostMapping("/send_otp")
	public ResponseEntity<?> sendOtp(@RequestBody Email email) {
		String destEmail = email.getEmail();
		System.out.println("-----------sending otp-----------");
		System.out.println(" Email " + destEmail);
		SimpleMailMessage mesg = new SimpleMailMessage();
		mesg.setTo(destEmail);
		mesg.setSubject("OTP for verification");
		Random ramdom = new Random();
		int otp = ramdom.nextInt(999999);
		userService.storeOTP(destEmail, otp);
		mesg.setText("Enter this OTP for verification : " + otp + "            Do not share it with anyone !!!!!");
		sender.send(mesg);
		return ResponseEntity.status(HttpStatus.OK).body("OTP sent successfully to Your email");
	}
	@PutMapping("/verify_otp")
	public ResponseEntity<?> verifyOtp(@RequestBody Email email) throws Exception{
		userService.verifyOtp(email);
		return ResponseEntity.status(HttpStatus.OK).body("Password set");

	}
}
