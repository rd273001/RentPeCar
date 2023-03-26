package com.rrss.services;

import java.util.List;

import com.rrss.entities.Booking;
import com.rrss.entities.User;

public interface BookingServices {
	Booking saveBooking (Booking booking);
	Booking findById (int id);
	List<Booking> findAllBookings();
	void deleteBooking (Booking booking);
	List<Booking> findAll();
	List<Booking> findByUser(User id);

}
