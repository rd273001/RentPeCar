package com.rrss.models.billing;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Billing;

public class BillingDTO {

	private int billingId;
	private double totalAmount;
	private boolean billStatus;
	private Date billDate;
	private String username;
	private Date bookingDate;
	private Date fromDate;
	private Date toDate;
	private double deposite;
	private double taxAmount;
	private String carNumber;

	public BillingDTO() {
		// TODO Auto-generated constructor stub
	}



	public BillingDTO(int billingId, double totalAmount, boolean billStatus, Date billDate, String username,
			Date bookingDate, Date fromDate, Date toDate, double deposite, double taxAmount, String carNumber) {
		super();
		this.billingId = billingId;
		this.totalAmount = totalAmount;
		this.billStatus = billStatus;
		this.billDate = billDate;
		this.username = username;
		this.bookingDate = bookingDate;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.deposite = deposite;
		this.taxAmount = taxAmount;
		this.carNumber = carNumber;
	}



	public int getBillingId() {
		return billingId;
	}



	public void setBillingId(int billingId) {
		this.billingId = billingId;
	}



	public double getTotalAmount() {
		return totalAmount;
	}



	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}



	public boolean isBillStatus() {
		return billStatus;
	}



	public void setBillStatus(boolean billStatus) {
		this.billStatus = billStatus;
	}



	public Date getBillDate() {
		return billDate;
	}



	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public Date getBookingDate() {
		return bookingDate;
	}



	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
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



	public double getDeposite() {
		return deposite;
	}



	public void setDeposite(double deposite) {
		this.deposite = deposite;
	}



	public double getTaxAmount() {
		return taxAmount;
	}



	public void setTaxAmount(double taxAmount) {
		this.taxAmount = taxAmount;
	}



	public String getCarNumber() {
		return carNumber;
	}



	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}



	public static double calculateTax(double amount) {
		return amount*1.18;
	}

	public static BillingDTO fromEntity(Billing billing) {
		BillingDTO dto=new BillingDTO();
		BeanUtils.copyProperties(billing, dto);
		dto.setUsername(billing.getBooking().getUser().getUsername());
		dto.setBookingDate(billing.getBooking().getBookingDate());
		dto.setFromDate(billing.getBooking().getFromDate());
		dto.setToDate(billing.getBooking().getToDate());
		dto.setDeposite(billing.getBooking().getSecurityDeposit());
		dto.setCarNumber(billing.getBooking().getCar().getCarNumber());
		dto.setTaxAmount(calculateTax(billing.getTotalAmount()));
		return dto;
	}



}
