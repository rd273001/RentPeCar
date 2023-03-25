package com.rrss.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.Driver;

public interface DriverDao extends JpaRepository<Driver, Integer> {

}
