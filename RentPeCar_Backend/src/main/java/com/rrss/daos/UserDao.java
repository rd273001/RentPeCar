package com.rrss.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {
	User findByEmail(String email);
	List<User> findByRole(String role);
	Optional<User> findByResetToken(String resetToken);

	Optional<User> findByEmailAndOtp(String email, int otp);

}
