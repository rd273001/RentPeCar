package com.rrss.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;

@Getter

@Entity
@Table(name = "billing")
public class Billing {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int billingId;
	@OneToOne
	@JoinColumn(name = "bookingid")
	private Booking booking;
	private double amountBalence;
	private double taxAmount;
	private boolean billStatus;

	@CreationTimestamp
	@DateTimeFormat(pattern = "yyyy/MM/dd")
	@Temporal(TemporalType.TIMESTAMP)
	private Date billDate;
	private double totalAmount;

	public Billing() {
		// TODO Auto-generated constructor stub
	}

	public Billing(int billingId, Booking booking, double amountBalence, double taxAmount,
			boolean billStatus, Date billDate, double totalAmount) {
		this.billingId = billingId;
		this.booking = booking;
		this.amountBalence = amountBalence;
		this.taxAmount = taxAmount;
		this.billStatus = billStatus;
		this.billDate = billDate;
		this.totalAmount = totalAmount;
	}

	public int getBillingId() {
		return billingId;
	}

	public void setBillingId(int billingId) {
		this.billingId = billingId;
	}



	public Double getAmountBalence() {
		return amountBalence;
	}

	public void setAmountBalence(Double amountBalence) {
		this.amountBalence = amountBalence;
	}

	public double getTaxAmount() {
		return taxAmount;
	}

	public void setTaxAmount(double taxAmount) {
		this.taxAmount = taxAmount;
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

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}


}
