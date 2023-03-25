package com.rrss.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrss.daos.BillingDao;
import com.rrss.entities.Billing;
@Transactional
@Service
public class BillingServiceImpl implements BillingSerivce{
	@Autowired
	private BillingDao billDao;

	@Override
	public Billing saveBilling(Billing billing) {

		return billDao.save(billing);
	}

	@Override
	public List<Billing> findAll() {
		return billDao.findAll();
	}

}
