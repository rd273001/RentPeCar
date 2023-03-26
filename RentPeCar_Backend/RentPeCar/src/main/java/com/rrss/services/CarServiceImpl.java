package com.rrss.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrss.daos.CarDao;
import com.rrss.entities.Car;

@Transactional
@Service
public class CarServiceImpl implements CarService {
	@Autowired
	private CarDao carDao;

	@Override
	public List<Car> findCarAll() {
		return carDao.findAll();
	}

	@Override
	public Car findById(int id) {
		Optional<Car> car = carDao.findById(id);
		return car.orElse(null);
	}


	@Override
	public Car saveCar(Car car) {
		return carDao.save(car);
	}

	@Override
	public List<Car> findBycategoryId(int id) {
		return carDao.findBycarCategoryId(id);
	}

	@Override
	public void deleteBooking(Car carId) {
      	carDao.delete(carId);
	}

	@Override
	public List<Car> getAll() {
		return carDao.findAll();
	}

}
