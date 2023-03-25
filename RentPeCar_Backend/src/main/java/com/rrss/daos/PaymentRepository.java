package com.rrss.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
