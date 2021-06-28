package com.team1.backend.model;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "events")
public class Event {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long eid;
	private String eventName;
	private String noOfGuest;
	private String typeOfFood;
	private String date;
	
	@ManyToOne
	@JoinColumn(name = "User_id")
	private User user;
	//@ManyToOne
	public Long getEid() {
		return eid;
	}

	public void setEid(Long eid) {
		this.eid = eid;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getNoOfGuest() {
		return noOfGuest;
	}

	public void setNoOfGuest(String noOfGuest) {
		this.noOfGuest = noOfGuest;
	}

	public String getTypeOfFood() {
		return typeOfFood;
	}

	public void setTypeOfFood(String typeOfFood) {
		this.typeOfFood = typeOfFood;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	@JsonBackReference
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Event [eid=" + eid + ", eventName=" + eventName + ", noOfGuest=" + noOfGuest + ", typeOfFood="
				+ typeOfFood + ", date=" + date + ", user=" + user + "]";
	}

	public Event(Long eid, String eventName, String noOfGuest, String typeOfFood, String date, User user) {
		super();
		this.eid = eid;
		this.eventName = eventName;
		this.noOfGuest = noOfGuest;
		this.typeOfFood = typeOfFood;
		this.date = date;
		this.user = user;
	}
	
		
	
	
}
