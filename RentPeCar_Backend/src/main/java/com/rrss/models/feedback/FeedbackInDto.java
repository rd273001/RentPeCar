package com.rrss.models.feedback;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Booking;
import com.rrss.entities.Feedback;



public class FeedbackInDto {
	private Booking booking;
	private String feedback;
	private String rating;

	public FeedbackInDto() {
		// TODO Auto-generated constructor stub
	}


	public FeedbackInDto(Booking booking, String feedback, String rating) {
		this.booking = booking;
		this.feedback = feedback;
		this.rating = rating;
	}


	public Booking getBooking() {
		return booking;
	}


	public void setBooking(Booking booking) {
		this.booking = booking;
	}


	public String getFeedback() {
		return feedback;
	}


	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}


	public String getRating() {
		return rating;
	}


	public void setRating(String rating) {
		this.rating = rating;
	}


	public static Feedback toEntity(FeedbackInDto feedbackDto) {
		Feedback feedback = new Feedback();
//		feedbackDto.setBookingId(feedback.getBooking().getBookingid());
//		feedback.setBooking(feedbackDto.getBooking());
		BeanUtils.copyProperties(feedbackDto, feedback);
		return feedback;
	}

}
