package Group1.AssetManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Group1.AssetManagement.model.UserModel;
import Group1.AssetManagement.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	// Adding a user.
	@PostMapping("/add")
	public boolean add(@RequestBody UserModel user) {
		
		return userService.saveUser(user);
	}
	
	// Getting all students
	@GetMapping("/getAllUsers")
	public List<UserModel> getAllUsers(){
		return userService.getAllUsers();
	}
	
	// Get where username and password match
	@GetMapping("/getUserLogin/{userName}/{password}")
	public UserModel getUserLogin(@PathVariable String userName, @PathVariable String password) {
		System.out.println("UserName: " + userName + ", Password:" + password);
		return userService.getUserLogin(userName, password);
	}
	
    @RequestMapping("/")
    public String errors(){
        return "Error Found ";
    }
	
	
}
