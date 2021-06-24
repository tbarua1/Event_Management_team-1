package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController 
{
@Autowired
	
	private UserRepository repo; 

	@RequestMapping (value = "/user", method =RequestMethod.GET)
	public List<User> userList()
	{
		return repo.findAll();
	}
	
	@PostMapping("/user")
	public User userPost(@RequestBody User User)
	{
		return repo.save(User);
		
	}
	
	
   @DeleteMapping("/user")
   public String UserDelete(@RequestParam Long id)
	{
		 repo.deleteById(id);
		return "record no."+id+" has been deleted ";
		
		
	}
   @PutMapping("/user")
   public User userPut(@RequestBody User User)
	{
		return repo.save(User);
		
	}
}


