package com.rrss.services;

import java.util.List;

import com.rrss.entities.Car;

public interface CarService {
	List<Car> findCarAll();

	Car findById(int id);

	Car saveCar(Car car);

	List<Car> findBycategoryId(int id);

	void deleteBooking(Car car);

	List<Car> getAll();
}
