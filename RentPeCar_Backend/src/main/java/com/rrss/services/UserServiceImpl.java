package com.rrss.services;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.rrss.daos.UserDao;
import com.rrss.dto.Email;
import com.rrss.entities.User;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private MailSender emailService;

	@Override
	public User findByEmail(String email) {
		return userDao.findByEmail(email);
	}

	@Override
	public List<User> findByRole(String role) {
		return userDao.findByRole(role);
	}

	@Override
	public List<User> findAll() {
		return userDao.findAll();
	}

	@Override
	public User saveUser(User e) {
		String encPassword = passwordEncoder.encode(e.getPassword());
		e.setPassword(encPassword);
		return userDao.save(e);
	}

	@Override
	public User findUserById(int id) {
		Optional<User> emp = userDao.findById(id);
		return emp.orElse(null);
	}

	@Override
	public void deleteUser(User emp) {
		userDao.delete(emp);
	}

	@Override
	public User authenticate(String email, String password) {
		User authUser = userDao.findByEmail(email);
		if (authUser != null && passwordEncoder.matches(password, authUser.getPassword()))
			return authUser;
		return null;
	}

	@Override
	public User changePassword(String email) {

		return null;
	}

	@Override
	public Optional<User> findByResetToken(String resetToken) {
		return userDao.findByResetToken(resetToken);
	}

	@Override
	public void resetpassword(User user, String password) {
		String encPassword = passwordEncoder.encode(password);
		user.setPassword(encPassword);
		userDao.save(user);
	}


	@Override
	public void sendOtp(User user, HttpSession session) {
		Random random = new Random();
		String otp = String.valueOf(100000 + random.nextInt(888888));
		user.setResetToken(otp);
		userDao.save(user);
//		session.setAttribute("user", user);
//		session.setAttribute("onetp", otp);
//		session.setMaxInactiveInterval(180);
		System.out.println(otp);
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(user.getEmail());
		msg.setSubject("Otp for Reset Password");
		msg.setText("\nOtp for reset your password is "+ otp + "\ndo not share it with anyone");
		emailService.send(msg);
	}

	@Override
	public User updateUser(User e) {
		return userDao.save(e);
	}

	@Override
	public void storeOTP(String email, int otp) {
		User user = userDao.findByEmail(email);
		user.setOtp(otp);

	}

	@Override
	public void verifyOtp(Email dto) throws Exception {
		User user = userDao.findByEmailAndOtp(dto.getEmail(), dto.getOtp()).orElseThrow(()->new Exception("User not found!"));
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
	}

}
