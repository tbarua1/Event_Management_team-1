package com.team1.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team1.backend.model.Event;
import com.team1.backend.repository.EventRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventDetailController {
	@Autowired
	private EventRepository repo;
	@RequestMapping(value = "/get_event", method = RequestMethod.GET)
	public List<Event> eventList() {
		return repo.findAll();
	}
	@PostMapping("/event")
	public Event eventPost(@RequestBody Event event) {
		return repo.save(event);
	}
	@DeleteMapping("/event")
	public String eventDelete(@RequestParam Long id) {	
		repo.deleteById(id);
		return "Record No. "+id+" has been Deleted";
	}
	@PutMapping("/event")
	public Event eventPut(@RequestBody Event event) {
		return repo.save(event);
	}
}

