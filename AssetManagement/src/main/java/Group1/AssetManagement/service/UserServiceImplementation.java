package Group1.AssetManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Group1.AssetManagement.model.UserModel;
import Group1.AssetManagement.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public boolean saveUser(UserModel user) {
		List<UserModel> listOfUsers = userRepo.findAll();
		
		// Loop that finds if the username is already taken.
		for (UserModel userIndex : listOfUsers) {
			if (user.getUserName().equals(userIndex.getUserName())) {
				return false;
			}
		}
		userRepo.save(user);
		return true;
	}

	@Override
	public List<UserModel> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public UserModel getUserLogin(String userName, String password) {
		List<UserModel> listOfUsers = userRepo.findAll();
		
		// For loop that searches for the username and password match
		for (UserModel user : listOfUsers) {
			if (user.getUserName().equals(userName)) {
				if (user.getPassword().equals(password)) {
					return user;
				}
			}
		}
		return null;
	}
	
}
