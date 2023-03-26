package com.rrss.models.billing;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Billing;
import com.rrss.entities.Booking;

public class BillingInDto {

	private Booking booking;
	private double  totalAmount;
	private boolean billStatus;
	private double amountBalence;
	private double taxAmount;
	private Date billDate;

	public BillingInDto() {

	}





	public BillingInDto(Booking booking, double totalAmount, boolean billStatus, double amountBalence, double taxAmount,
			Date billDate) {
		super();
		this.booking = booking;
		this.totalAmount = totalAmount;
		this.billStatus = billStatus;
		this.amountBalence = amountBalence;
		this.taxAmount = taxAmount;
		this.billDate = billDate;
	}





	public double getAmountBalence() {
		return amountBalence;
	}





	public void setAmountBalence(double amountBaence) {
		this.amountBalence = amountBaence;
	}





	public double getTaxAmount() {
		return taxAmount;
	}





	public void setTaxAmount(double taxAmount) {
		this.taxAmount = taxAmount;
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



	public boolean isBillStatus() {
		return billStatus;
	}



	public void setBillStatus(boolean billStatus) {
		this.billStatus = billStatus;
	}



	@Override
	public String toString() {
		return "BillingInDto [booking=" + booking + ", advanceAmount=" + totalAmount + "]";
	}

	public static Billing toEntity(BillingInDto billDto) {
		Billing billing = new Billing();
		BeanUtils.copyProperties(billDto, billing);
		return billing;
	}

}
