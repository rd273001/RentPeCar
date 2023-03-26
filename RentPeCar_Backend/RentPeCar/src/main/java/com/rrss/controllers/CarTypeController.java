package com.rrss.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.CarType;
import com.rrss.models.Response;
import com.rrss.models.car.CarTypeInDto;
import com.rrss.services.CarTypeServices;
@CrossOrigin
@RequestMapping("/carType")
@RestController
public class CarTypeController {
	@Autowired
	private CarTypeServices carTypeService;

	@GetMapping("")
	public ResponseEntity<?> findAllCarType(){
		List<CarType> list = carTypeService.findCarTypeAll();
		return Response.success(list);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {
		CarType car = carTypeService.findById(id);
		return Response.success(car);
	}

	@PostMapping("")
	public ResponseEntity<?> save(CarTypeInDto carDto){
		CarType carType = CarTypeInDto.toEntity(carDto);
		carType = carTypeService.saveCarType(carType,carDto.getCarImage() );
		return Response.success(carType);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		CarType carType= carTypeService.findById(id);
		carTypeService.deleteCategory(carType);
		return Response.success(true);
	}

}
