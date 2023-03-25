package com.rrss.models.feedback;

import org.springframework.beans.BeanUtils;

import com.rrss.entities.Feedback;


public class FeedbackDto {
	private String feedback;
	private String rating;
	private String username;

	public FeedbackDto() {
	}

	public FeedbackDto( String username,String feedback, String rating) {
		this.username=username;
		this.feedback = feedback;
		this.rating = rating;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public static FeedbackDto fromEntity(Feedback feedback) {
		FeedbackDto dto = new FeedbackDto();
		BeanUtils.copyProperties(feedback, dto);
		dto.setUsername(feedback.getBooking().getUser().getUsername());
		return dto;
	}

}
