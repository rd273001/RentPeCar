package com.rrss.controllers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.Billing;
import com.rrss.models.Response;
import com.rrss.models.billing.BillingDTO;
import com.rrss.models.billing.BillingInDto;
import com.rrss.services.BillingSerivce;
@CrossOrigin
@RequestMapping("/billing")
@RestController
public class BillingController {

	@Autowired BillingSerivce billService;

	@GetMapping("/")
	public ResponseEntity<?> getAllBookings() {
		List<Billing> bookingList = billService.findAll();
		Stream<BillingDTO> result = bookingList.stream().map(billing -> BillingDTO.fromEntity(billing));
		return Response.success(result);
	}

	@PostMapping("/")
	public ResponseEntity<?> save(BillingInDto billingDto){
		Billing billing = BillingInDto.toEntity(billingDto);
		billing = billService.saveBilling(billing);
		return Response.success(billing);
	}



}
