package com.rrss.models.booking;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Booking;

public class BookingDTO {

	private Integer bookingid;
	private int categoryId;
	private Date bookingDate;
	private String location;
	private double securityDeposit;
	private Date fromDate;
	private Date toDate;
	private int totalDays;
	private double amount;
	private boolean secondPayStatus;
	private boolean status;
	private String username;
	private String carVarient;
	private String carCatImg;
	private double pricePerDay;


	public BookingDTO() {

	}

	public BookingDTO(Integer bookingid, String driverName ,String photo, int categoryId, int totalDays, Date bookingDate, String carCatImg, String location,
			double securityDeposit, Date fromDate, Date toDate, double pricePerDay, double amount,
			boolean secondPayStatus, String driverPhone,boolean status, String username, String carVarient,String carNumber) {
		this.bookingid = bookingid;
		this.bookingDate = bookingDate;
				this.categoryId = categoryId;

		this.location = location;
		this.securityDeposit = securityDeposit;
		this.carCatImg = carCatImg;
		this.fromDate = fromDate;
		this.pricePerDay = pricePerDay;
		this.toDate = toDate;
		this.totalDays = totalDays;
		this.amount = amount;
		this.secondPayStatus = secondPayStatus;
		this.status = status;
		this.username = username;
		this.carVarient = carVarient;
	}

	public int getTotalDays() {
		return totalDays;
	}

	public void setTotalDays(int totalDays) {
		this.totalDays = totalDays;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCarVarient() {
		return carVarient;
	}

	public double getPricePerDay() {
		return pricePerDay;
	}

	public void setPricePerDay(double pricePerDay) {
		this.pricePerDay = pricePerDay;
	}

	public String getCarCatImg() {
		return carCatImg;
	}

	public void setCarCatImg(String carCatImg) {
		this.carCatImg = carCatImg;
	}

	public void setCarVarient(String carVarient) {
		this.carVarient = carVarient;
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

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}



	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}


	public static BookingDTO fromEntity(Booking booking) {
		BookingDTO dto = new BookingDTO();
		BeanUtils.copyProperties(booking, dto);
		dto.setCategoryId(booking.getCarCategory().getId());
		dto.setUsername(booking.getUser().getUsername());
		dto.setCarCatImg(booking.getCarCategory().getCarCatImg());
		dto.setPricePerDay(booking.getCarCategory().getPricePerDay());
		int days = getDays(booking.getFromDate(), booking.getToDate());
		dto.setTotalDays(days);

		double amount = calculateTotalAmount(days, booking.getCarCategory().getPricePerDay());
		dto.setAmount(amount);
		dto.setCarVarient(booking.getCarCategory().getCategoryName());
		return dto;
	}
	public static int getDays(Date date1, Date date2) {
		long diff = date2.getTime() - date1.getTime();
		return (int) TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
	}
	public static double calculateTotalAmount(int noOfDays, double pricePerDay) {
		return pricePerDay * noOfDays;
	}

	@Override
	public String toString() {
		return "BookingDTO [bookingid=" + bookingid + ", bookingDate=" + bookingDate + ", location=" + location
				+ ", securityDeposit=" + securityDeposit + ", fromDate=" + fromDate + ", toDate=" + toDate + ", amount="
				+ amount + ", secondPayStatus=" + secondPayStatus + ", status=" + status + ", username=" + username
				+ ", carVarient=" + carVarient + "]";
	}

}
