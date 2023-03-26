package com.rrss.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.rrss.entities.CarType;

public interface CarTypeServices {
	List<CarType> findCarTypeAll();

	CarType findById(int id);

	CarType saveCarType(CarType cartype, MultipartFile carimage);

	void deleteCategory(CarType carType);

}
