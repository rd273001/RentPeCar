package com.rrss.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rrss.entities.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer> {

}
