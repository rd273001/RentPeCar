package com.rrss.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.CarType;

public interface CarTypeDao extends JpaRepository<CarType, Integer>{

}
