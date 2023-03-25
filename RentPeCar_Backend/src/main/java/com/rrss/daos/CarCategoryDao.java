package com.rrss.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.CarCategory;

public interface CarCategoryDao extends JpaRepository<CarCategory, Integer>{
	List<CarCategory> findBycarTypeId(int id);
	@Override
	List<CarCategory> findAll();
	List<CarCategory> findCarById(int id);

}
