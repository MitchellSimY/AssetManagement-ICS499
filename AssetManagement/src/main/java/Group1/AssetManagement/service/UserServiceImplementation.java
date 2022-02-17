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
	public UserModel saveUser(UserModel user) {
		return userRepo.save(user);
	}

	@Override
	public List<UserModel> getAllUsers() {
		
		return userRepo.findAll();
	}
	
}