package com.rrss.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.rrss.daos.DriverDao;
import com.rrss.entities.Driver;
import com.rrss.utils.StorageService;

@Service
@Transactional
public class DriverServiceImpl implements DriverService  {

	@Autowired
	private DriverDao driverDao;
	@Autowired
	private StorageService storageService;

	@Override
	public Driver findDriverById(int id) {
		return driverDao.getById(id);
	}

	@Override
	public List<Driver> findAllDrivers	() {
		return driverDao.findAll();
	}


	@Override
	public void deleteDriver(Driver d) {
		driverDao.delete(d);
	}

	@Override
	public Driver addDriver(Driver d, MultipartFile driverPhoto) {
		String filename = storageService.store(driverPhoto);
		d.setPhoto(filename);
		return driverDao.save(d);
	}


}
