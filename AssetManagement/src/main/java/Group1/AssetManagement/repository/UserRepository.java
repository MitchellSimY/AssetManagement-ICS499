package Group1.AssetManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import Group1.AssetManagement.model.UserModel;


@Repository
public interface UserRepository extends JpaRepository <UserModel, Integer>{
	
}
