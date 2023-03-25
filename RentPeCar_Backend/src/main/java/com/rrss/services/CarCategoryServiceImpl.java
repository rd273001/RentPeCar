package com.rrss.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.rrss.daos.CarCategoryDao;
import com.rrss.entities.CarCategory;
import com.rrss.utils.StorageService;

@Transactional
@Service
public class CarCategoryServiceImpl implements CarCategoryService {

	@Autowired
	private CarCategoryDao carCategoryDao;
	@Autowired
	private StorageService storageService;

	@Override
	public List<CarCategory> findAll() {
		return carCategoryDao.findAll();
	}

	@Override
	public CarCategory findById(int id) {
		Optional<CarCategory> carCat = carCategoryDao.findById(id);
		return carCat.orElse(null);
	}

	@Override
	public List<CarCategory> findBycarTypeId(int id) {
		return carCategoryDao.findBycarTypeId(id);

	}

	@Override
	public CarCategory saveCarCategory(CarCategory carCategory, MultipartFile cartypeimg) {
		String filename = storageService.store(cartypeimg);
		carCategory.setCarCatImg(filename);
		return carCategoryDao.save(carCategory);
	}

	@Override
	public List<CarCategory> findCarBycategoryId(int id) {
		return carCategoryDao.findCarById(id);
	}

	@Override
	public void deleteCategory(CarCategory category) {
		carCategoryDao.delete(category);
	}

}
