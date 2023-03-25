package com.rrss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.dto.BookingPayment;
import com.rrss.services.IPaymentService;

@RestController
@CrossOrigin
@RequestMapping("/api/pay")
public class PaymentController {
	@Autowired
	private IPaymentService paymentService;

	@PostMapping("/create_order")
	public ResponseEntity<?> createPaymentOrder(@RequestBody BookingPayment payment) throws Exception{
		return ResponseEntity.status(HttpStatus.CREATED).body(paymentService.savePaymentDetails(payment));
	}

	@PutMapping("/update_pay_order")
	public ResponseEntity<?> updatePayOrder(@RequestBody BookingPayment payment) throws Exception{
		String s = paymentService.updatePaymentDetails(payment);
		return ResponseEntity.status(HttpStatus.OK).body(s);
	}

}
