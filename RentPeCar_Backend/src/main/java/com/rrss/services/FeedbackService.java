package com.rrss.services;

import java.util.List;

import com.rrss.entities.Feedback;

public interface FeedbackService {
	Feedback saveFeedback(Feedback feedback);

	List<Feedback> displayAll();



}
