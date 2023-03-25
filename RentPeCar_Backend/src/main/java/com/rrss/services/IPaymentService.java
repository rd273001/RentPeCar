package com.rrss.services;

import com.rrss.dto.BookingPayment;
import com.rrss.entities.Payment;

public interface IPaymentService {
	Payment savePaymentDetails(BookingPayment payment) throws Exception;
	String updatePaymentDetails(BookingPayment payment) throws Exception;

}
