package com.rrss.services;

import javax.transaction.Transactional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.rrss.daos.BookingDao;
import com.rrss.daos.PaymentRepository;
import com.rrss.dto.BookingPayment;
import com.rrss.entities.Booking;
import com.rrss.entities.Payment;

@Service
@Transactional
public class PaymentServiceImpl implements IPaymentService {
	@Value("${Razorpay.key_id}")
	private String key_id;
	@Value("${Razorpay.key_secret}")
	private String key_secret;
	@Autowired
	private PaymentRepository paymentRepository;
	@Autowired
	private BookingDao bookingDao;
	
	@Override
	public Payment savePaymentDetails(BookingPayment pay) throws Exception {
		Booking booking = bookingDao.getById(pay.getBookingid());
		var client = new RazorpayClient(key_id, key_secret);
		JSONObject ob = new JSONObject();
		double amount = pay.getAmount() * 100;
		ob.put("amount", amount); // amount need to send on paise so thats why multiplied by 100
		ob.put("currency", "INR");
		ob.put("receipt", "txn_123");

		Order order = client.Orders.create(ob);
		Payment myOrderRecord = new Payment();
		String amt = (order.get("amount")).toString();
		myOrderRecord.setOrderId(order.get("id"));
		myOrderRecord.setAmount(Double.parseDouble(amt)/100);
		String amt_paid = (order.get("amount_paid")).toString();
		myOrderRecord.setAmount_paid(Double.parseDouble(amt_paid)/100);
		myOrderRecord.setStatus(order.get("status"));

		Payment persistPayment = paymentRepository.save(myOrderRecord);
		booking.setPayment(persistPayment);
		bookingDao.save(booking);
		return myOrderRecord;
	}

	@Override
	public String updatePaymentDetails(BookingPayment pay) throws Exception {
		Booking booking = bookingDao.getById(pay.getBookingid());
		booking.getPayment().setStatus("Paid");
		booking.getPayment().setAmount_paid(booking.getPayment().getAmount_paid());
		booking.getPayment().setPaymentId(booking.getPayment().getPaymentId());
		bookingDao.save(booking);
		return "updated";
	}

}
