package com.rrss.services;

import java.util.List;

import com.rrss.entities.Billing;

public interface BillingSerivce {
	Billing saveBilling (Billing billing);

	List<Billing> findAll();

}
