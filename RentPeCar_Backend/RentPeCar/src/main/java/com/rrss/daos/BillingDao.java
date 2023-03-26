package com.rrss.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.Billing;

public interface BillingDao extends JpaRepository<Billing, Integer> {
}
