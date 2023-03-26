package com.rrss.controllers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.Booking;
import com.rrss.entities.User;
import com.rrss.models.Response;
import com.rrss.models.booking.BookingDTO;
import com.rrss.models.booking.BookingInDto;
import com.rrss.models.booking.CarAssignInDto;
import com.rrss.models.booking.ConfirmBookingDTO;
import com.rrss.services.BookingServices;
@CrossOrigin
@RequestMapping("/booking")
@RestController
public class BookingController {
	@Autowired
	private BookingServices bookingServices;


	@GetMapping("/")
	public ResponseEntity<?> getAllBookings() {
		List<Booking> bookingList = bookingServices.findAll();
		Stream<BookingDTO> result = bookingList.stream().map(booking -> BookingDTO.fromEntity(booking));
		System.out.println(result);
		System.out.println(bookingList);
		return Response.success(result);
	}



	@PostMapping("/")
	public ResponseEntity<?> save(BookingInDto bookingDto){
		Booking booking = BookingInDto.toEntity(bookingDto);
		booking = bookingServices.saveBooking(booking);
		return Response.success(booking);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteBooking(@PathVariable("id") int id){
		Booking booking = bookingServices.findById(id);
		bookingServices.deleteBooking(booking);
		return Response.success(booking);

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getBooking(@PathVariable("id") int id){
		Booking booking = bookingServices.findById(id);
		BookingDTO result = BookingDTO.fromEntity(booking);
		return Response.success(result);

	}

	@GetMapping("/cb/{id}")
	public ResponseEntity<?> getConfirmedBooking(@PathVariable("id") int id){
		Booking booking = bookingServices.findById(id);
		ConfirmBookingDTO result = ConfirmBookingDTO.fromEntity(booking);
		return Response.success(result);

	}


	@GetMapping("/findByUser/{id}")
	public ResponseEntity<?> getBookingByUser(@PathVariable("id") User id){
		List<Booking> bookingList = bookingServices.findByUser(id);
		Stream<BookingDTO> result = bookingList.stream().map(booking -> BookingDTO.fromEntity(booking));
		return Response.success(result);

	}
	@PutMapping("/{id}")
	public ResponseEntity<?> updateBooking(@PathVariable("id") int id,CarAssignInDto carDto){
		Booking booking = bookingServices.findById(id);
		//booking = CarAssignInDto.toEntity(carDto);
		booking.setBookingid(id);
		booking.setDriver(carDto.getDriver());
		booking.setCar(carDto.getCar());
		booking.setStatus(carDto.getStatus());
		Booking result = bookingServices.saveBooking(booking);
		System.out.println(result);
		System.out.println(booking);
		return Response.success(result);

	}


}
