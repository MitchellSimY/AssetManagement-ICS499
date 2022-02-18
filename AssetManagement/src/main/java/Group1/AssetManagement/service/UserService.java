package Group1.AssetManagement.service;

import java.util.List;

import Group1.AssetManagement.model.UserModel;

public interface UserService {
	public UserModel saveUser(UserModel user);
	
	public List<UserModel> getAllUsers();

	public UserModel getUserLogin(String userName, String password);


}
