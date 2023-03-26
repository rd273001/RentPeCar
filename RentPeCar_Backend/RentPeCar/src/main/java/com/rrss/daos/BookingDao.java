package com.rrss.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rrss.entities.Booking;
import com.rrss.entities.User;

public interface BookingDao extends JpaRepository<Booking, Integer>{
    @Query("FROM Booking ORDER BY status DESC")
	List<Booking> findByUser(User id);
    

}
