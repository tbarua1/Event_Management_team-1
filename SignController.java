package com.example.demo;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class SignController {
	@RequestMapping("/Sign")
	public String display(HttpServletRequest req,Model m)
	{
		String name=req.getParameter("username");
		String email=req.getParameter("email");
		String pass=req.getParameter("pass");
		String pass2=req.getParameter("pass2");
		if(pass.equals(pass2))
		{
			return viewpage;
			}
		else {
			String msg="Password does not match. Try again";
			m.addAttribute("message",msg);
			return "errorpage";
			
		}
		
		
	}
	

}
