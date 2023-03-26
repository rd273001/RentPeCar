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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrss.entities.User;
import com.rrss.models.Response;
import com.rrss.models.user.UserDTO;
import com.rrss.models.user.UserInDTO;
import com.rrss.models.user.UserUpdate;
import com.rrss.services.UserService;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class UserControllerImpl {

	@Autowired
	private UserService userService;

	@GetMapping("")
	public ResponseEntity<?> getAllUsers() {
		List<User> list = userService.findAll();
		Stream<UserDTO> result = list.stream().map(user -> UserDTO.fromEntity(user));
		return Response.success(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {
		User emp = userService.findUserById(id);
		UserDTO result = UserDTO.fromEntity(emp);
		return Response.success(result);
	}

	@GetMapping("/email/{email}")
	public ResponseEntity<?> findUserByEmail(@PathVariable("email") String email) {
		User emp = userService.findByEmail(email);
		UserDTO result = UserDTO.fromEntity(emp);
		return Response.success(result);
	}

	@GetMapping("/role/{role}")
	public ResponseEntity<?> findByRoll(@PathVariable("role") String role) {
		List<User> emp = userService.findByRole(role);
		Stream<UserDTO> result = emp.stream().map(employee -> UserDTO.fromEntity(employee));
		return Response.success(result);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id) {
		User user = userService.findUserById(id);
		userService.deleteUser(user);
		return Response.success(true);
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestBody UserInDTO userDto) {
		User user = UserInDTO.toEntity(userDto);
		user = userService.authenticate(user.getEmail(),user.getPassword());
		System.out.println(user);
		if (user != null)
			return Response.success(user);
		return Response.error(user);
	}

	@PostMapping("/addUser")
	public ResponseEntity<?> saveUser(UserInDTO userDtoDto) {
		User user = UserInDTO.toEntity(userDtoDto);
		user = userService.saveUser(user);
		return Response.success(user);
	}

	@PostMapping("/addEmployee")
	public ResponseEntity<?> saveEmployee(UserInDTO userDtoDto) {
		User user = UserInDTO.toEntity(userDtoDto);
		user = userService.saveUser(user);
		System.out.println(user);
		return Response.success(user);
	}

	@PutMapping("/updateProfile/{id}")
	public ResponseEntity<?> updateUser(@PathVariable ("id")int id, UserUpdate userDtoDto) {
		User user=userService.findUserById(id);
		user.setUsername(userDtoDto.getUsername());
		user.setPhone(userDtoDto.getPhone());
		user.setAddress(userDtoDto.getAddress());
		user = userService.updateUser(user);
		System.out.println(user);
		return Response.success(user);
	}

}
