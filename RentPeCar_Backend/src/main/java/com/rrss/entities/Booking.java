package com.rrss.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "booking")
public class Booking {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer bookingid;
	@DateTimeFormat(pattern = "yyyy/MM/dd")
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date bookingDate;
	private String location;
	private double securityDeposit;
	@DateTimeFormat(pattern = "yyyy/MM/dd")
	@Temporal(TemporalType.DATE)
	private Date fromDate;
	@DateTimeFormat(pattern = "yyyy/MM/dd")
	@Temporal(TemporalType.DATE)
	private Date toDate;
	private double amount;
	private boolean secondPayStatus;
	@ManyToOne
	@JoinColumn(name = "userid")
	private User user;
	@OneToOne(mappedBy = "booking" ,cascade = CascadeType.REFRESH)
	private Feedback feedback;

	@OneToOne(mappedBy = "booking",cascade = CascadeType.ALL, orphanRemoval = true)
	private Billing billing;
	// Multiple bookings can have same category
	@ManyToOne
	@JoinColumn(name = "carCategoryId")
	private CarCategory carCategory;
	@ManyToOne(cascade = CascadeType.REFRESH)
	@JoinColumn(name = "carid")
	private Car car;
	@ManyToOne
	@JoinColumn(name="driverId")
	private Driver driver;
	private boolean status;

	@OneToOne
	private Payment payment;


	public Booking() {

	}



	public Booking(Integer bookingid, Date bookingDate, String location, double securityDeposit, Date fromDate, Date toDate,
			double amount, boolean secondPayStatus, User user, Feedback feedback, Billing billing,
			CarCategory carCategory, Car car, Driver driver, boolean status) {
		super();
		this.bookingid = bookingid;
		this.bookingDate = bookingDate;
		this.location = location;
		this.securityDeposit = securityDeposit;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.amount = amount;
		this.secondPayStatus = secondPayStatus;
		this.user = user;
		this.feedback = feedback;
		this.billing = billing;
		this.carCategory = carCategory;
		this.car = car;
		this.driver = driver;
		this.status = status;
	}



	public Integer getBookingid() {
		return bookingid;
	}

	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getSecurityDeposit() {
		return securityDeposit;
	}

	public void setSecurityDeposit(double securityDeposit) {
		this.securityDeposit = securityDeposit;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public boolean getSecondPayStatus() {
		return secondPayStatus;
	}

	public void setSecondPayStatus(boolean secondPayStatus) {
		this.secondPayStatus = secondPayStatus;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



	public CarCategory getCarCategory() {
		return carCategory;
	}

	public void setCarCategory(CarCategory carCategory) {
		this.carCategory = carCategory;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}


	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}



	public Billing getBilling() {
		return billing;
	}

	public void setBilling(Billing billing) {
		this.billing = billing;
	}



	public Feedback getFeedback() {
		return feedback;
	}



	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}



	public Payment getPayment() {
		return payment;
	}



	public void setPayment(Payment payment) {
		this.payment = payment;
	}



}
