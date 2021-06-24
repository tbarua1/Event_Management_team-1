package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventDetailsController 
{
	@Autowired
	
	private EventsRepository repo;
	@RequestMapping (value = "/event", method =RequestMethod.GET)
	public List<Events> eventList()
	{
		return repo.findAll();
	}
	
	@PostMapping("/event")
	public Events eventPost(@RequestBody Events event)
	{
		return repo.save(event);
		
	}
	
   @DeleteMapping("/event")
   public String eventDelete(@RequestBody Long id)
	{
		 repo.deleteById(id);
		return "record no."+id+" has been deleted ";
		
		
	}
   @PutMapping("/event")
   public Events eventPut(@RequestBody Events event)
	{
		return repo.save(event);
		
	}
}
