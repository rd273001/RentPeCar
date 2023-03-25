package com.rrss.controllers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.Driver;
import com.rrss.models.Response;
import com.rrss.models.driver.DriverDTO;
import com.rrss.models.driver.DriverInDTO;
import com.rrss.services.DriverService;

@CrossOrigin
@RequestMapping("/driver")
@RestController
public class DriverController {

	@Autowired
	private DriverService driverService;

	@GetMapping("")
	public ResponseEntity<?> getAllDrivers() {
		List<Driver> list = driverService.findAllDrivers();
		Stream<DriverDTO> result = list.stream().map(driver -> DriverDTO.fromEntity(driver));
		System.out.println(result);
		return Response.success(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findDriverById(@PathVariable("id") int id) {
		Driver driver = driverService.findDriverById(id);
		return Response.success(driver);
	}

	@PostMapping("/addDriver")
	public ResponseEntity<?> addDriver(DriverInDTO driverInDto) {

		Driver driver = DriverInDTO.toEntity(driverInDto);
		driver = driverService.addDriver(driver, driverInDto.getPhoto());
		System.out.println(driver);
		return Response.success(driver);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteDriver(@PathVariable("id") int id) {
		Driver driver = driverService.findDriverById(id);
		driverService.deleteDriver(driver);
		return Response.success(true);
	}
}
