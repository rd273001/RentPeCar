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

import com.rrss.entities.CarCategory;
import com.rrss.models.Response;
import com.rrss.models.car.CarCategoryDto;
import com.rrss.models.car.CarCategoryInDto;
import com.rrss.services.CarCategoryService;

@RequestMapping("/carCategory")
@RestController
@CrossOrigin
public class CarCategoryController {
	@Autowired
	private CarCategoryService carCategoryService;

	@GetMapping("/")
	public ResponseEntity<?> findAllCategories() {
		List<CarCategory> categoryList = carCategoryService.findAll();
		Stream<CarCategoryDto> result = categoryList.stream().map(category -> CarCategoryDto.fromEntity(category));

		return Response.success(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findByCarCategoryId(@PathVariable("id") int id) {
		List<CarCategory> carCategoryList = carCategoryService.findCarBycategoryId(id);
		Stream<CarCategoryDto> result = carCategoryList.stream()
				.map(carCategory -> CarCategoryDto.fromEntity(carCategory));
		return Response.success(result);

	}
	@GetMapping("/type/{id}")
	public ResponseEntity<?> findByCarTypeId(@PathVariable("id") int id) {
		List<CarCategory> carCategoryList = carCategoryService.findBycarTypeId(id);
		Stream<CarCategoryDto> result = carCategoryList.stream()
				.map(carCategory -> CarCategoryDto.fromEntity(carCategory));
		return Response.success(result);

	}

	@PostMapping("/")
	public ResponseEntity<?> save(CarCategoryInDto carCatDto) {
		CarCategory carCategory = CarCategoryInDto.toEntity(carCatDto);
		carCategory = carCategoryService.saveCarCategory(carCategory, carCatDto.getCarCatImg());
		return Response.success(carCategory);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		CarCategory category = carCategoryService.findById(id);
		carCategoryService.deleteCategory(category);
		return Response.success(true);
	}

}
